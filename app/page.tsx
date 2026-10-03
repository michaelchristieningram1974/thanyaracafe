import { siteSettings } from "@/lib/content";
import MenuOrder from "./MenuOrder";
import { ThaiFlag, JapanFlag, UKFlag } from "./Flags";

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-end px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="block h-3 w-4" aria-label="Thai" title="Thai">
              <ThaiFlag />
            </span>
            <span
              className="block h-3 w-4 border border-charcoal/20"
              aria-label="Japanese"
              title="Japanese"
            >
              <JapanFlag />
            </span>
            <span className="block h-3 w-4" aria-label="English" title="English">
              <UKFlag />
            </span>
          </div>
        </nav>
      </header>

      {/* Hero / wordmark */}
      <section className="relative isolate flex min-h-[220px] items-center justify-center overflow-hidden px-6 text-center sm:min-h-[280px]">
        <div className="absolute inset-0 -z-20 bg-[url('/hero-som-tam.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest/95 via-forest/50 to-forest/0" />
        <h1 className="font-display text-6xl leading-tight text-cream drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] sm:text-7xl">
          {siteSettings.name}
        </h1>
      </section>

      {/* Menu + ordering */}
      <section id="menu" className="border-t border-charcoal/10">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-8">
          <div className="flex flex-nowrap items-center gap-4">
            <h2 className="font-display text-3xl uppercase tracking-wide text-forest">
              Menu
            </h2>
            <span className="font-script -rotate-3 shrink-0 rounded-md bg-tan px-3 py-2 text-center text-lg font-bold leading-tight text-charcoal shadow-sm">
              Pay on delivery
              <br />
              via QR / cash
            </span>
          </div>
          <span className="mt-2 block h-px w-16 bg-forest/40" />
          <div className="mt-10">
            <MenuOrder />
          </div>
        </div>
      </section>

      {/* Hours / Location */}
      <section id="visit" className="border-t border-charcoal/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl uppercase tracking-wide text-forest">
            For Pick Up
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
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-md bg-charcoal/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://staticmap.openstreetmap.de/staticmap.php?center=13.1717,100.9330&zoom=15&size=640x360&markers=13.1717,100.9330,red-pushpin"
                  alt="Map showing Thanyara Cafe near central Si Racha"
                  className="h-full w-full object-cover"
                />
              </div>
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
