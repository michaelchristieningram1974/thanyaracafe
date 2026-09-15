import { siteSettings } from "@/lib/content";
import MenuOrder from "./MenuOrder";
import { ThaiFlag, JapanFlag, UKFlag } from "./Flags";

export default function Home() {
  const [mainName, ...rest] = siteSettings.name.split(" ");
  const subName = rest.join(" ");

  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg uppercase tracking-widest text-forest">
            {siteSettings.name}
          </span>
          <div className="flex items-center gap-3">
            <span className="block h-4 w-6" aria-label="Thai" title="Thai">
              <ThaiFlag />
            </span>
            <span
              className="block h-4 w-6 border border-charcoal/20"
              aria-label="Japanese"
              title="Japanese"
            >
              <JapanFlag />
            </span>
            <span className="block h-4 w-6" aria-label="English" title="English">
              <UKFlag />
            </span>
          </div>
        </nav>
      </header>

      {/* Hero / wordmark */}
      <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-20 text-center">
        <h1 className="font-display text-5xl uppercase tracking-[0.15em] text-forest sm:text-6xl">
          {mainName}
        </h1>
        {subName && (
          <p className="font-display mt-1 text-2xl italic text-forest/80 sm:text-3xl">
            {subName.toLowerCase()}
          </p>
        )}
      </section>

      {/* Menu + ordering */}
      <section id="menu" className="border-t border-charcoal/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl uppercase tracking-wide text-forest">
            Menu
          </h2>
          <span className="mt-2 block h-px w-16 bg-forest/40" />
          <p className="mt-4 max-w-xl text-sm text-charcoal/60">
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
          <h2 className="font-display text-3xl uppercase tracking-wide text-forest">
            Visit
          </h2>
          <span className="mt-2 block h-px w-16 bg-forest/40" />
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
          <h2 className="font-display text-3xl uppercase tracking-wide text-forest">
            Contact
          </h2>
          <span className="mt-2 block h-px w-16 bg-forest/40" />
          <p className="mt-4 text-sm text-charcoal/80">{siteSettings.email}</p>
          <p className="mt-1 text-sm text-charcoal/60">{siteSettings.phone}</p>
        </div>
      </section>

      <footer className="border-t border-charcoal/10 px-6 py-10 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-forest/70">
          Thai Food · Fresh Ingredients · Homemade Style
        </p>
        <p className="mt-4 text-xs text-charcoal/50">
          © {new Date().getFullYear()} {siteSettings.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
