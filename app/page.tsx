import { siteSettings, categories, menuItems } from "@/lib/content";
import { ThaiFlag, JapanFlag, UKFlag } from "./Flags";

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <span className="font-serif text-base tracking-wide sm:text-lg">
            {siteSettings.name}
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="block h-3.5 w-5 sm:h-4 sm:w-6" aria-label="Thai" title="Thai">
              <ThaiFlag />
            </span>
            <span
              className="block h-3.5 w-5 border border-charcoal/20 sm:h-4 sm:w-6"
              aria-label="Japanese"
              title="Japanese"
            >
              <JapanFlag />
            </span>
            <span className="block h-3.5 w-5 sm:h-4 sm:w-6" aria-label="English" title="English">
              <UKFlag />
            </span>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-4 py-12 sm:gap-4 sm:px-6 sm:py-24">
        <h1 className="font-serif text-3xl leading-tight sm:text-5xl">
          {siteSettings.name}
        </h1>
        <p className="max-w-md text-sm text-charcoal/70">{siteSettings.tagline}</p>
      </section>

      {/* Menu */}
      <section id="menu" className="border-t border-charcoal/10">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl">Menu</h2>
          <p className="mt-2 max-w-xl text-sm text-charcoal/60">
            Pick your items and quantities, then send us your order — pay when you
            pick up.
          </p>
          <div className="mt-8 grid gap-10 sm:mt-10 sm:grid-cols-2 sm:gap-12">
            {categories.map((category) => {
              const items = menuItems.filter((m) => m.category === category);
              if (items.length === 0) return null;
              return (
                <div key={category}>
                  <h3 className="font-serif text-lg text-clay sm:text-xl">{category}</h3>
                  <ul className="mt-3 space-y-4 sm:mt-4 sm:space-y-5">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-3 sm:gap-4">
                        <div className="aspect-[3/2] w-24 shrink-0 rounded-md bg-sage/25 sm:w-40" />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="font-medium">{item.name}</span>
                            <span className="whitespace-nowrap text-sm text-charcoal/60">
                              {item.price} THB
                            </span>
                          </div>
                          <p className="text-sm text-charcoal/70">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours / Location */}
      <section id="visit" className="border-t border-charcoal/10 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl">Visit</h2>
          <div className="mt-6 grid gap-8 sm:mt-8 sm:grid-cols-2 sm:gap-10">
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
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl">Contact</h2>
          <p className="mt-3 break-words text-sm text-charcoal/80">{siteSettings.email}</p>
          <p className="mt-1 text-sm text-charcoal/60">{siteSettings.phone}</p>
        </div>
      </section>

      <footer className="border-t border-charcoal/10 px-4 py-8 text-center text-xs text-charcoal/50 sm:px-6">
        © {new Date().getFullYear()} {siteSettings.name}. All rights reserved.
      </footer>
    </main>
  );
}
