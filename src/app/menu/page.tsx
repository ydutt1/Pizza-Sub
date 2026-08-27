"use client";

import { useState, useEffect } from "react";
import { categories, menuItems } from "@/data/menu";
import MenuItemCard from "@/components/MenuItemCard";
import { useCart } from "@/context/CartContext";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, totalPrice } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && categories.find((c) => c.slug === hash)) {
      setActiveCategory(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedByCategory = categories.map((cat) => ({
    category: cat,
    items: filteredItems.filter((item) => item.category === cat.id),
  }));

  const nonEmptyGroups = groupedByCategory.filter(
    (group) => group.items.length > 0
  );

  const handleCategoryClick = (id: string, slug: string) => {
    setActiveCategory(id);
    const element = document.getElementById(slug);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 170;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* ─── HEADER ─── */}
      <div className="pt-10 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 border-b border-espresso-700/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl text-espresso-700 mb-2">
            Our Menu
          </h1>
          <p className="text-espresso-500 max-w-xl">
            Classic pizzas to street-style Indo-Chinese — something for every craving.
          </p>
        </div>
      </div>

      {/* ─── STICKY NAVIGATION BAR ─── */}
      <div className={`sticky top-16 z-30 transition-all duration-200 border-b ${isScrolled ? 'bg-sand-100/95 backdrop-blur-sm shadow-sm border-espresso-700/10 py-3' : 'bg-sand-100 border-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-3">
            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-espresso-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search the menu"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 sm:py-2.5 rounded-lg bg-white border border-espresso-700/15 text-espresso-700 placeholder-espresso-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all text-[15px]"
              />
            </div>

            {/* Cart Summary (Desktop) */}
            {totalItems > 0 && (
              <div className="hidden sm:flex items-center gap-3 text-sm">
                <span className="text-espresso-600 font-medium">
                  {totalItems} item{totalItems !== 1 ? "s" : ""} · ₹{totalPrice}
                </span>
                <button
                  onClick={() => document.querySelector('[aria-label="Open cart"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))}
                  className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-4"
                >
                  View Cart
                </button>
              </div>
            )}
          </div>

          {/* Categories Tab Bar */}
          <div className="category-scroll flex gap-1 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-espresso-700/10">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex-shrink-0 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${activeCategory === "all"
                  ? "border-espresso-700 text-espresso-700"
                  : "border-transparent text-espresso-400 hover:text-espresso-600"
                }`}
            >
              All
            </button>
            {categories.map((cat) => {
              const count = menuItems.filter((i) => i.category === cat.id).length;
              if (count === 0) return null;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id, cat.slug)}
                  className={`flex-shrink-0 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${activeCategory === cat.id
                      ? "border-espresso-700 text-espresso-700"
                      : "border-transparent text-espresso-400 hover:text-espresso-600"
                    }`}
                >
                  {cat.name}
                  <span className="text-xs text-espresso-400 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── MENU ITEMS GRID ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 min-h-screen">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 sm:py-28">
            <h3 className="text-lg font-display text-espresso-700 mb-2">
              No items found
            </h3>
            <p className="text-espresso-500">
              Try searching for something else, like "pizza" or "momos".
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all") }}
              className="mt-5 text-brand-600 font-medium hover:text-brand-700 underline underline-offset-4"
            >
              Clear search
            </button>
          </div>
        ) : activeCategory === "all" ? (
          nonEmptyGroups.map((group) => (
            <section
              key={group.category.id}
              id={group.category.slug}
              className="mb-14 sm:mb-16 scroll-mt-52"
            >
              <h2 className="font-display text-xl sm:text-2xl text-espresso-700 mb-5 sm:mb-6">
                {group.category.name}
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5">
                {group.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
