import Link from "next/link";
import { siteConfig } from "@/data/menu";

export default function Footer() {
  return (
    <footer className="bg-sand-200 border-t border-espresso-700/10 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-baseline gap-1.5 mb-5">
              <span className="font-display font-semibold text-2xl text-espresso-700 tracking-tight">
                {siteConfig.cafeName.split(" ")[0]}
              </span>
              <span className="font-display italic text-2xl text-brand-500">
                {siteConfig.cafeName.split(" ").slice(1).join(" ")}
              </span>
            </Link>
            <p className="text-espresso-500 mb-6 max-w-sm leading-relaxed text-[15px]">
              A neighborhood cafe for pizzas, subs, burgers, momos, and
              combo deals — made fresh, ordered easily.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-espresso-700/15 text-espresso-600 hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={`tel:${siteConfig.cafePhone.replace(/\s/g, '')}`}
                className="w-10 h-10 rounded-md border border-espresso-700/15 text-espresso-600 hover:border-brand-500 hover:text-brand-500 transition-colors flex items-center justify-center"
                aria-label="Phone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-espresso-700 font-display text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {['Home', 'Menu', 'About Us', 'Contact'].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`}
                    className="text-espresso-500 hover:text-brand-500 transition-colors inline-block text-[15px]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-espresso-700 font-display text-base mb-4">Contact</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href={`tel:${siteConfig.cafePhone.replace(/\s/g, '')}`} className="text-espresso-500 hover:text-espresso-700 transition-colors">
                  {siteConfig.cafePhone}
                </a>
              </li>
              <li className="text-espresso-500 leading-relaxed">
                {siteConfig.cafeHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-espresso-700/10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-espresso-400 text-sm">
            © {new Date().getFullYear()} {siteConfig.cafeName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
