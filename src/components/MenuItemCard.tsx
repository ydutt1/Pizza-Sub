"use client";

import { useState } from "react";
import { MenuItem } from "@/types";
import { useCart } from "@/context/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const { addItem, items } = useCart();
  const [selectedSize, setSelectedSize] = useState(0);

  const currentPrice = item.sizes ? item.sizes[selectedSize].price : item.price;
  const currentSizeLabel = item.sizes ? item.sizes[selectedSize].label : undefined;
  const cartItemId = currentSizeLabel ? `${item.id}-${currentSizeLabel}` : item.id;
  const cartItem = items.find((i) => i.id === cartItemId);

  const handleAdd = () => {
    addItem({
      id: cartItemId,
      name: currentSizeLabel ? `${item.name} (${currentSizeLabel})` : item.name,
      price: currentPrice,
      image: item.image,
    });
  };

  return (
    <div className="food-card cafe-card rounded-lg overflow-hidden flex flex-col">
      {/* Image */}
      {item.image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-sand-300">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Veg/Non-veg indicator */}
          <div className="absolute top-2.5 left-2.5">
            <div className={item.isVeg !== false ? "veg-dot" : "nonveg-dot"} />
          </div>
          {/* Badge */}
          {item.badge && (
            <span className="absolute top-2.5 right-2.5 bg-espresso-700 text-white text-[10px] font-semibold px-2 py-1 rounded">
              {item.badge}
            </span>
          )}
        </div>
      ) : (
        <div className="px-3.5 pt-3.5 flex items-center justify-between">
          <div className={item.isVeg !== false ? "veg-dot relative" : "nonveg-dot relative"} />
          {item.badge && (
            <span className="bg-espresso-700 text-white text-[10px] font-semibold px-2 py-1 rounded">
              {item.badge}
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-3.5 flex flex-col flex-1">
        <h3 className="font-display text-[15px] text-espresso-700 mb-1 leading-tight line-clamp-1">
          {item.name}
        </h3>
        <p className="text-espresso-400 text-xs mb-3 flex-1 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Size selector */}
        {item.sizes && item.sizes.length > 0 && (
          <div className="flex gap-1.5 mb-3">
            {item.sizes.map((size, idx) => (
              <button
                key={size.label}
                onClick={() => setSelectedSize(idx)}
                className={`size-btn text-[11px] font-semibold px-2.5 py-1 rounded border ${selectedSize === idx
                  ? "active border-espresso-700"
                  : "bg-transparent text-espresso-500 border-espresso-700/15 hover:border-espresso-700/30"
                  }`}
              >
                {size.label} · ₹{size.price}
              </button>
            ))}
          </div>
        )}

        {/* Price + Add */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-base font-semibold text-espresso-700 font-display">
            ₹{currentPrice}
          </span>
          <button
            onClick={handleAdd}
            className="bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-semibold text-sm py-2 px-3.5 rounded transition-all duration-150 flex items-center gap-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add
            {cartItem && (
              <span className="bg-white/25 px-1.5 py-0.5 rounded text-[10px] ml-0.5">
                {cartItem.quantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
