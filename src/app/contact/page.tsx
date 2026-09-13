import { siteConfig } from "@/data/menu";

const contactInfo = [
  {
    label: "Visit us",
    value: siteConfig.cafeAddress || "Address coming soon",
    link: (siteConfig as any).googleMapsUrl || (siteConfig.googleMapsEmbed ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.cafeAddress)}` : null),
    linkLabel: "Get directions",
  },
  {
    label: "Call us",
    value: siteConfig.cafePhone,
    link: `tel:${siteConfig.cafePhone.replace(/\s/g, '')}`,
    linkLabel: "Call now",
  },
  {
    label: "WhatsApp",
    value: "Order & support on WhatsApp",
    link: `https://wa.me/${siteConfig.whatsappNumber}`,
    linkLabel: "Start a chat",
  },
  {
    label: "Open hours",
    value: siteConfig.cafeHours,
    link: null,
    linkLabel: null,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO ─── */}
      <div className="pt-16 sm:pt-20 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-espresso-700/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-5">
            Get in touch
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-espresso-700 mb-6 leading-tight">
            Visit us or say hello
          </h1>
          <p className="text-espresso-500 text-lg max-w-xl mx-auto leading-relaxed">
            Reach out for orders, catering questions, or just to tell us your
            favorite dish.
          </p>
        </div>
      </div>

      {/* ─── INFO ─── */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {contactInfo.map((c, i) => (
              <div
                key={i}
                className={`${i > 0 ? "lg:border-l lg:border-espresso-700/10 lg:pl-8" : ""}`}
              >
                <p className="text-xs text-brand-500 font-semibold uppercase tracking-wide mb-2">
                  {c.label}
                </p>
                <p className="text-espresso-700 text-[15px] mb-3 leading-relaxed">
                  {c.value}
                </p>
                {c.link && c.linkLabel && (
                  <a
                    href={c.link}
                    target={c.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-espresso-600 hover:text-espresso-800 font-medium text-sm underline underline-offset-4"
                  >
                    {c.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAP & DETAILS ─── */}
      <section className="py-16 sm:py-24 bg-sand-200 border-y border-espresso-700/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-4">Find us</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso-700 mb-6">
                Our location
              </h2>
              <p className="text-espresso-500 text-lg mb-8 leading-relaxed">
                Located in the heart of the city — easy to find, and always
                ready to serve you.
              </p>

              <div className="space-y-6">
                <div className="pb-5 border-b border-espresso-700/10">
                  <h4 className="font-display text-lg text-espresso-700 mb-1">Easy to locate</h4>
                  <p className="text-espresso-500 text-[15px]">
                    Right on the main street, with parking nearby.
                  </p>
                </div>
                <div className="pb-5 border-b border-espresso-700/10">
                  <h4 className="font-display text-lg text-espresso-700 mb-1">Dine-in & takeaway</h4>
                  <p className="text-espresso-500 text-[15px]">
                    Comfortable seating for guests, or grab and go.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-lg text-espresso-700 mb-1">Book for parties</h4>
                  <p className="text-espresso-500 text-[15px]">
                    Call us to book the cafe for birthdays and small events.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-espresso-700/10 bg-white relative aspect-square md:aspect-auto md:h-full min-h-[400px] sm:min-h-[460px]">
              {siteConfig.googleMapsEmbed ? (
                <iframe
                  src={siteConfig.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${siteConfig.cafeName} Location`}
                  className="w-full h-full"
                />
              ) : (
                <a
                  href={(siteConfig as any).googleMapsUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 cursor-pointer hover:bg-sand-100 transition-colors group"
                >
                  <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <p className="text-xl font-display text-espresso-700 mb-2">View Our Location</p>
                  <p className="text-espresso-500 text-sm underline underline-offset-4 decoration-espresso-200">Click to open Google Maps</p>
                </a>
              )}

              {/* Overlay on map */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-lg bg-white border border-espresso-700/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">
                <div>
                  <p className="font-display text-base text-espresso-700 mb-0.5">{siteConfig.cafeName}</p>
                  <p className="text-sm text-espresso-500">{siteConfig.cafeAddress || "Location Details"}</p>
                </div>
                {((siteConfig as any).googleMapsUrl || siteConfig.googleMapsEmbed) && (
                  <a
                    href={(siteConfig as any).googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.cafeAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-espresso-700 hover:bg-espresso-800 text-white font-medium py-2.5 px-5 rounded text-sm transition-colors pointer-events-auto"
                  >
                    Open in Maps
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHATSAPP CTA ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso-700 mb-5">
            The fastest way to order
          </h2>
          <p className="text-espresso-500 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Add items to your cart on the menu page, tap "Order via WhatsApp,"
            and send. That's it.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:brightness-95 text-white font-semibold py-3.5 px-8 rounded-lg transition-all active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Message us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
