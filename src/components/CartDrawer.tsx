"use client";

import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/menu";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart, totalItems } =
    useCart();

  // The message below is a summary of the cart for the customer's own
  // WhatsApp message — it is not sent anywhere automatically, and the
  // customer sees and can edit it before hitting send. Totals shown
  // here are for the customer's convenience only; because ordering
  // happens over a manual WhatsApp chat (no checkout/payment API),
  // there is no server call whose price or quantity values need to be
  // trusted or re-validated — the cafe confirms the real order by
  // reading the chat message itself.
  const generateWhatsAppMessage = () => {
    const date = new Date().toLocaleString();
    let msg = `New Order - ${siteConfig.cafeName}\n\n`;
    msg += `Date: ${date}\n\n`;
    msg += `Order details:\n`;
    msg += `----------------\n`;
    items.forEach((item, idx) => {
      const lineTotal = item.price * item.quantity;
      msg += `${idx + 1}. ${item.name}\n`;
      msg += `   Qty: ${item.quantity} x Rs.${item.price}\n`;
      msg += `   Subtotal: Rs.${lineTotal}\n\n`;
    });
    msg += `----------------\n`;
    msg += `Items: ${totalItems}\n`;
    msg += `Total: Rs.${totalPrice}\n\n`;
    msg += `Please confirm my order.`;
    return encodeURIComponent(msg);
  };

  const handleOrder = () => {
    if (items.length === 0) return;
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso-800/45"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[400px] max-w-[100vw] bg-sand-50 shadow-xl flex flex-col cart-slide-in border-l border-espresso-700/10">
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-espresso-700/10">
          <div className="flex items-center gap-2.5">
            <h2 className="font-display text-lg sm:text-xl text-espresso-700">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="bg-brand-500/10 text-brand-600 text-xs font-semibold px-2 py-0.5 rounded">
                {totalItems} item{totalItems !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-espresso-700/5 text-espresso-500 hover:text-espresso-800 transition-colors"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 hide-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 text-espresso-400">
              <p className="font-display text-lg text-espresso-600 mb-2">Cart is empty</p>
              <p className="text-sm">Add something delicious from the menu.</p>
              <button
                onClick={onClose}
                className="mt-6 px-5 py-2.5 border border-espresso-700/15 text-espresso-700 font-medium rounded hover:border-espresso-700/30 transition-colors text-sm"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 rounded-lg bg-white border border-espresso-700/10"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[68px] h-[68px] object-cover rounded"
                  />
                  <div className="flex-1 min-w-0 py-0.5">
                    <h3 className="font-medium text-[15px] text-espresso-700 truncate leading-tight mb-1">
                      {item.name}
                    </h3>
                    <p className="text-espresso-600 font-semibold text-[15px]">
                      ₹{item.price}
                    </p>
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center gap-1 border border-espresso-700/15 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 hover:bg-espresso-700/5 flex items-center justify-center text-espresso-600 font-medium active:scale-95 transition-transform"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-espresso-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 hover:bg-espresso-700/5 flex items-center justify-center text-espresso-600 font-medium active:scale-95 transition-transform"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-espresso-400 hover:text-brand-600 text-xs font-medium p-1.5 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-espresso-700/10 p-4 sm:p-5 bg-sand-50 space-y-3">
            <div className="bg-white rounded-lg p-4 border border-espresso-700/10 space-y-2">
              <div className="flex justify-between text-sm text-espresso-500">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm text-espresso-500">
                <span>Taxes & fees</span>
                <span>Included</span>
              </div>
              <div className="h-px bg-espresso-700/10 my-2" />
              <div className="flex justify-between">
                <span className="text-espresso-700 font-medium">Total</span>
                <span className="font-semibold text-espresso-700">
                  ₹{totalPrice}
                </span>
              </div>
            </div>

            <button
              onClick={handleOrder}
              className="w-full bg-[#25D366] hover:brightness-95 active:scale-[0.98] text-white font-semibold py-3.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Review & Order via WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full text-espresso-400 hover:text-espresso-700 font-medium py-1 text-sm transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
