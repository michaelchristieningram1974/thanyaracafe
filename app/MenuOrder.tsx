"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, menuItems } from "@/lib/content";

type Cart = Record<string, number>;

export default function MenuOrder() {
  const [cart, setCart] = useState<Cart>({});
  const [formOpen, setFormOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const setQty = (id: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) {
        delete next[id];
      } else {
        next[id] = qty;
      }
      return next;
    });
  };

  const lineItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => {
          const item = menuItems.find((m) => m.id === id);
          if (!item) return null;
          return { item, qty };
        })
        .filter((x): x is { item: (typeof menuItems)[number]; qty: number } => x !== null),
    [cart]
  );

  const total = lineItems.reduce((sum, { item, qty }) => sum + item.price * qty, 0);
  const itemCount = lineItems.reduce((sum, { qty }) => sum + qty, 0);

  async function submitOrder() {
    setStatus("submitting");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lineItems.map(({ item, qty }) => ({
            name: item.name,
            qty,
            price: item.price,
          })),
          total,
          customer: { name: customerName, phone: customerPhone, note },
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setCart({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <div className="grid gap-12 sm:grid-cols-2">
        {categories.map((category) => {
          const items = menuItems.filter((m) => m.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category}>
              <h3 className="font-serif text-xl text-clay">{category}</h3>
              <ul className="mt-4 space-y-5">
                {items.map((item) => {
                  const qty = cart[item.id] ?? 0;
                  return (
                    <li key={item.id} className="flex gap-4">
                      {item.image ? (
                        <div className="relative aspect-[3/2] w-40 shrink-0 overflow-hidden rounded-md bg-charcoal/5">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="160px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[3/2] w-40 shrink-0 rounded-md bg-sage/25" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-sm text-charcoal/60">
                            {item.price} THB
                          </span>
                        </div>
                        <p className="text-sm text-charcoal/70">{item.description}</p>
                        <div className="mt-2 flex items-center gap-3">
                          <button
                            type="button"
                            aria-label={`Remove one ${item.name}`}
                            onClick={() => setQty(item.id, qty - 1)}
                            disabled={qty === 0}
                            className="h-7 w-7 rounded-full border border-charcoal/20 text-sm disabled:opacity-30"
                          >
                            −
                          </button>
                          <span className="w-5 text-center text-sm">{qty}</span>
                          <button
                            type="button"
                            aria-label={`Add one ${item.name}`}
                            onClick={() => setQty(item.id, qty + 1)}
                            className="h-7 w-7 rounded-full border border-charcoal/20 text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {itemCount > 0 && (
        <div className="sticky bottom-4 z-20 mt-10 flex items-center justify-between gap-4 rounded-xl bg-charcoal px-5 py-4 text-cream shadow-lg">
          <span className="text-sm">
            {itemCount} item{itemCount !== 1 ? "s" : ""} · {total} THB
          </span>
          <button
            type="button"
            onClick={() => setFormOpen(true)}
            className="rounded-full bg-clay px-5 py-2 text-sm font-medium"
          >
            Review order
          </button>
        </div>
      )}

      {formOpen && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-charcoal/50 px-4"
          onClick={() => status !== "submitting" && setFormOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {status === "success" ? (
              <div className="text-center">
                <h3 className="font-serif text-xl">Order sent!</h3>
                <p className="mt-2 text-sm text-charcoal/70">
                  We've got your order and will have it ready soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormOpen(false);
                    setStatus("idle");
                  }}
                  className="mt-4 rounded-full bg-clay px-5 py-2 text-sm font-medium text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl">Your order</h3>
                <ul className="mt-3 max-h-40 space-y-1 overflow-y-auto text-sm">
                  {lineItems.map(({ item, qty }) => (
                    <li key={item.id} className="flex justify-between">
                      <span>
                        {qty}× {item.name}
                      </span>
                      <span>{item.price * qty} THB</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex justify-between border-t border-charcoal/10 pt-2 text-sm font-medium">
                  <span>Total</span>
                  <span>{total} THB</span>
                </div>

                <div className="mt-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
                  />
                  <textarea
                    placeholder="Notes (optional)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full rounded-md border border-charcoal/20 px-3 py-2 text-sm"
                    rows={2}
                  />
                </div>

                {status === "error" && (
                  <p className="mt-3 text-sm text-red-600">
                    Something went wrong sending your order — please try again.
                  </p>
                )}

                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFormOpen(false)}
                    disabled={status === "submitting"}
                    className="flex-1 rounded-full border border-charcoal/20 px-5 py-2 text-sm"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={submitOrder}
                    disabled={
                      status === "submitting" || !customerName || !customerPhone
                    }
                    className="flex-1 rounded-full bg-clay px-5 py-2 text-sm font-medium text-white disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending…" : "Place order"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
