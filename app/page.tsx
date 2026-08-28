import { siteSettings } from "@/lib/content";
import MenuOrder from "./MenuOrder";
import { ThaiFlag, JapanFlag, UKFlag } from "./Flags";

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-serif text-lg tracking-wide">{siteSettings.name}</span>
          <div className="flex items-center gap-3">
            <span className="block h-4 w-6" aria-label="Thai" title="Thai">
              <ThaiFlag />
            </span>
            <span className="block h-4 w-6" aria-label="Japanese" title="Japanese">
              <JapanFlag />
            </span>
            <span className="block h-4 w-6" aria-label="English" title="English">
              <UKFlag />
            </span>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-24">
        <h1 className="font-serif text-5xl leading-tight">{siteSettings.name}</h1>
      </section>

      {/* Menu + ordering */}
      <section id="menu" className="border-t border-charcoal/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-serif text-3xl">Menu</h2>
          <p className="mt-2 max-w-xl text-sm text-charcoal/60">
            Pick your items and quantities, then send us your order — pay when you
            pick up.
          </p>
          <div className="mt-10">
            <MenuOrder />
          </div>
        </div>
      </section>

      {/* Hours / Location */}
      <section id="visit" className="border-t border-charcoal/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-serif text-3xl">Visit</h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-charcoal/50">
                Hours
              </h3>
              <table className="mt-3 w-full text-sm">
                <tbody>
                  {siteSettings.hours.map((h) => (
                    <tr key={h.day} className="border-b border-charcoal/10">
                      <td className="py-2 pr-4 font-medium">{h.day}</td>
                      <td className="py-2 text-charcoal/70">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wide text-charcoal/50">
                Address
              </h3>
              <p className="mt-3 text-sm text-charcoal/80">{siteSettings.address}</p>
              <div className="mt-4 aspect-video w-full rounded-md bg-charcoal/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-charcoal/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-serif text-3xl">Contact</h2>
          <p className="mt-3 text-sm text-charcoal/80">{siteSettings.email}</p>
          <p className="mt-1 text-sm text-charcoal/60">{siteSettings.phone}</p>
        </div>
      </section>

      <footer className="border-t border-charcoal/10 px-6 py-8 text-center text-xs text-charcoal/50">
        © {new Date().getFullYear()} {siteSettings.name}. All rights reserved.
      </footer>
    </main>
  );
}
