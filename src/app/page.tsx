import Link from "next/link";
import { siteConfig, categories, testimonials } from "@/data/menu";

const features = [
  {
    title: "Fresh ingredients",
    desc: "Sourced daily, prepared to order.",
  },
  {
    title: "Quick service",
    desc: "Fast preparation, no long waits.",
  },
  {
    title: "Fair prices",
    desc: "Combo deals that don't break the bank.",
  },
  {
    title: "Order on WhatsApp",
    desc: "Add to cart, send, and you're done.",
  },
];

const comboCategories = categories.filter((c) =>
  ["student-combos", "party-combos", "easy-money"].includes(c.id)
);

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative pt-14 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-4">
              {siteConfig.cafeName}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-espresso-700 leading-[1.1] mb-6">
              Taste that brings you back.
            </h1>
            <p className="text-base sm:text-lg text-espresso-500 mb-8 max-w-lg leading-relaxed">
              Handcrafted pizzas, gourmet subs, momos, Chinese food, and juicy
              burgers — plus student deals and party packs for every
              occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 bg-espresso-700 hover:bg-espresso-800 text-white font-medium py-3.5 px-7 rounded-lg transition-colors active:scale-[0.98]"
              >
                View Full Menu
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-espresso-700/20 hover:border-espresso-700/40 text-espresso-700 font-medium py-3.5 px-7 rounded-lg transition-colors active:scale-[0.98]"
              >
                Order on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-2 mt-10 text-sm text-espresso-500">
              <span className="text-brand-500 font-medium">★★★★★</span>
              <span>Rated by 5,000+ local regulars</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&h=1100&fit=crop"
              alt="Fresh pizza from our kitchen"
              className="rounded-lg w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-rule" />
      </div>

      {/* ─── ABOUT (owner note) ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1541592102775-7b565a585794?w=400&h=500&fit=crop" alt="Preparing a pizza in the kitchen" className="rounded-lg w-full h-full object-cover" />
              <img src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=500&fit=crop" alt="Finished pizza ready to serve" className="rounded-lg w-full h-full object-cover mt-8" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-4">A note from the owner</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso-700 mb-6 leading-tight">
                Serving the neighborhood since {siteConfig.establishedYear}
              </h2>
              <div className="space-y-5 text-espresso-500 text-[17px] leading-relaxed">
                <p>
                  We started {siteConfig.cafeName} {siteConfig.yearsOfService} years ago
                  with a simple idea: serve genuinely good food, at a fair price,
                  without cutting corners. Fresh ingredients, generous portions,
                  made properly.
                </p>
                <p>
                  Thank you to everyone who's supported us along the way. Whether
                  it's a cheesy pizza, spicy momos, or a juicy burger — we still
                  put the same care into every order.
                </p>
              </div>
              <p className="mt-8 font-display text-lg text-espresso-700">— The Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMBO CATEGORIES ─── */}
      <section className="py-16 sm:py-24 bg-sand-200 border-y border-espresso-700/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14">
            <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-3">Smart savings</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso-700">
              Combo deals worth ordering for
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {comboCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/menu#${cat.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/5]"
              >
                <img
                  src={
                    cat.id === "student-combos"
                      ? "https://images.unsplash.com/photo-1627308595229-7830f5c90683?w=600&h=800&fit=crop"
                      : cat.id === "party-combos"
                        ? "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=800&fit=crop"
                        : "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=800&fit=crop"
                  }
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-800/90 via-espresso-800/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl sm:text-2xl text-white mb-1 leading-tight">
                    {cat.name.replace(/[^a-zA-Z ]/g, '')}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-sand-100 text-sm font-medium">
                    View deals
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 sm:gap-y-0">
            {features.map((f, i) => (
              <div key={i} className={`pr-6 ${i > 0 ? "sm:border-l sm:border-espresso-700/10 sm:pl-8" : ""}`}>
                <h3 className="font-display text-lg text-espresso-700 mb-1.5">{f.title}</h3>
                <p className="text-espresso-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-rule" />
      </div>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div>
              <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-3">Customer reviews</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso-700">
                What people are saying
              </h2>
            </div>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-espresso-600 hover:text-espresso-800 font-medium text-sm underline underline-offset-4 w-fit"
            >
              Read reviews on Google Maps
            </a>
          </div>

          <div className="category-scroll flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {testimonials.map((t, i) => (
              <div key={i} className="cafe-card rounded-lg p-6 min-w-[280px] max-w-[320px] flex-shrink-0 flex flex-col">
                <p className="text-brand-500 text-sm font-medium mb-3">{"★".repeat(t.rating)}</p>
                <p className="text-espresso-600 leading-relaxed flex-1 mb-5 text-[15px]">{t.text}</p>
                <div>
                  <p className="text-espresso-700 font-medium text-sm">{t.name}</p>
                  <p className="text-espresso-400 text-xs">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 sm:py-24 bg-espresso-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
            Craving something good?
          </h2>
          <p className="text-sand-200 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Browse the menu, build your order, and send it straight to us on WhatsApp.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 bg-white text-espresso-700 hover:bg-sand-100 font-medium py-3.5 px-8 rounded-lg transition-colors active:scale-[0.98]"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
}
