import { NextRequest, NextResponse } from "next/server";

interface OrderLineItem {
  name: string;
  qty: number;
  price: number;
}

interface OrderPayload {
  items: OrderLineItem[];
  total: number;
  customer: { name: string; phone: string; note?: string };
}

export async function POST(req: NextRequest) {
  let payload: OrderPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!payload.items?.length || !payload.customer?.name || !payload.customer?.phone) {
    return NextResponse.json({ error: "Missing order details" }, { status: 400 });
  }

  const lines = payload.items.map((i) => `${i.qty}× ${i.name} — ${i.price * i.qty} THB`);
  const message = [
    "🛎️ New order — Thanyara Cafe",
    "",
    ...lines,
    "",
    `Total: ${payload.total} THB`,
    "",
    `From: ${payload.customer.name} (${payload.customer.phone})`,
    payload.customer.note ? `Note: ${payload.customer.note}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  if (!token) {
    // No LINE token configured yet — log server-side so the order isn't silently lost.
    console.log("[order] LINE_CHANNEL_ACCESS_TOKEN not set. Order was:\n", message);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.line.me/v2/bot/message/broadcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        messages: [{ type: "text", text: message }],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[order] LINE broadcast failed:", res.status, errText);
      return NextResponse.json({ error: "Failed to deliver order" }, { status: 502 });
    }
  } catch (err) {
    console.error("[order] LINE broadcast error:", err);
    return NextResponse.json({ error: "Failed to deliver order" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
