import { siteConfig } from "@/data/menu";
import { galleryImages } from "@/data/gallery";

const values = [
  {
    title: "Made properly",
    desc: "Every dish is prepared with care and the freshest ingredients we can get.",
  },
  {
    title: "Fresh & local",
    desc: "We source produce and ingredients from trusted local suppliers.",
  },
  {
    title: "Skilled in the kitchen",
    desc: "Our cooks have refined these recipes over years, not weeks.",
  },
  {
    title: "You come first",
    desc: "If something's not right, we'll make it right. Simple as that.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "A small beginning",
    desc: "Started as a small takeaway counter with a big goal: serve the best pizzas and momos in town.",
  },
  {
    year: "2023",
    title: "A bigger menu",
    desc: "Added our signature subs, burgers, and Chinese range — quickly local favorites.",
  },
  {
    year: "2024",
    title: "Ordering made easy",
    desc: "Launched WhatsApp ordering for a faster, simpler way to get your food.",
  },
];

const nameParts = siteConfig.cafeName.split(" ");
const firstWord = nameParts[0];
const restWords = nameParts.slice(1).join(" ");

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO / BRAND ─── */}
      <div className="pt-16 sm:pt-20 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-espresso-700/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-5">
            Our Story
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-espresso-700 mb-6 leading-none">
            {firstWord} <em className="italic text-brand-500">{restWords}</em>
          </h1>
          <p className="text-espresso-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            A neighborhood cafe built on good food and honest hospitality.
          </p>
        </div>
      </div>

      {/* ─── CONTENT ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-4">Who we are</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso-700 mb-6 leading-tight">
                Serving joy since day one
              </h2>
              <div className="space-y-5 text-espresso-500 text-[17px] leading-relaxed">
                <p>
                  What started as a small dream has grown into the neighborhood's
                  favorite spot for good food and warm hospitality. At {siteConfig.cafeName},
                  we're more than a cafe — we're part of the block.
                </p>
                <p>
                  Our recipes have been refined over years of trial and taste,
                  always with a focus on fresh ingredients, bold flavor, and
                  generous portions. Every pizza is hand-tossed, every sub
                  made to order, every burger cooked properly.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-espresso-700/10">
                <div>
                  <p className="font-display text-3xl text-espresso-700">
                    {siteConfig.yearsOfService}+
                  </p>
                  <p className="text-xs text-espresso-400 mt-1 uppercase tracking-wide">Years open</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-espresso-700">
                    50+
                  </p>
                  <p className="text-xs text-espresso-400 mt-1 uppercase tracking-wide">Dishes</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-espresso-700">
                    5k+
                  </p>
                  <p className="text-xs text-espresso-400 mt-1 uppercase tracking-wide">Regulars</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=1000&fit=crop"
                alt="Cafe exterior"
                className="rounded-lg w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY (interior photos) ─── */}
      <section className="py-16 sm:py-24 bg-sand-200 border-y border-espresso-700/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-3">Take a look inside</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso-700">
              Our cafe
            </h2>
            <p className="text-espresso-500 mt-3 max-w-xl text-[15px]">
              Swap these for real photos of your dining area, kitchen, and counter — see
              the note in <code className="text-espresso-700 bg-white border border-espresso-700/10 px-1.5 py-0.5 rounded text-sm">src/data/gallery.ts</code>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                  }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14">
            <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-3">Our pillars</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso-700">
              What we stand for
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {values.map((v, i) => (
              <div
                key={i}
                className={`${i > 0 ? "lg:border-l lg:border-espresso-700/10 lg:pl-8" : ""}`}
              >
                <h3 className="font-display text-lg text-espresso-700 mb-2">
                  {v.title}
                </h3>
                <p className="text-espresso-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-16 sm:py-24 bg-sand-200 border-t border-espresso-700/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14">
            <p className="text-brand-500 font-medium text-sm tracking-wide uppercase mb-3">Our history</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-espresso-700">
              How we got here
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 sm:gap-8">
                <div className="font-display text-lg sm:text-xl text-brand-500 w-16 sm:w-20 flex-shrink-0 pt-0.5">
                  {t.year}
                </div>
                <div className="pb-8 sm:pb-10 border-b border-espresso-700/10 flex-1">
                  <h3 className="font-display text-lg sm:text-xl text-espresso-700 mb-2">
                    {t.title}
                  </h3>
                  <p className="text-espresso-500 leading-relaxed text-[15px]">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
