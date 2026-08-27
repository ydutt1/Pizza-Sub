"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";
import { siteConfig } from "@/data/menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <nav className="sticky top-0 z-40 bg-sand-100/95 backdrop-blur-sm border-b border-espresso-700/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Wordmark */}
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="font-display font-semibold text-xl text-espresso-700 tracking-tight">
                {siteConfig.cafeName.split(" ")[0]}
              </span>
              <span className="font-display italic text-xl text-brand-500">
                {siteConfig.cafeName.split(" ").slice(1).join(" ")}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-espresso-500 hover:text-espresso-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-1">
              {/* Cart button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2.5 rounded-md hover:bg-espresso-700/5 transition-colors active:scale-95"
                aria-label="Open cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.6}
                  stroke="currentColor"
                  className="w-6 h-6 text-espresso-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-brand-500 text-white text-[10px] font-semibold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-1">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2.5 rounded-md hover:bg-espresso-700/5 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-5 h-5 text-espresso-600"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-4 pt-1 border-t border-espresso-700/10 animate-fade-in">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-1 py-3.5 border-b border-espresso-700/5 text-espresso-600 hover:text-espresso-800 font-medium transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${siteConfig.cafePhone.replace(/\s/g, '')}`}
                  className="px-1 py-3.5 text-brand-500 font-medium transition-all text-base"
                >
                  Call {siteConfig.cafePhone}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
