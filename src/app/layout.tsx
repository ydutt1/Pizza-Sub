import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { CartProvider } from "@/context/CartContext";
import { siteConfig } from "@/data/menu";

export const metadata: Metadata = {
  title: `${siteConfig.cafeName} — ${siteConfig.cafeTagline}`,
  description:
    "Mouth-watering pizzas, fresh subs, burgers, momos, Chinese food & amazing combo deals. Order via WhatsApp! Student specials, party packs & more.",
  keywords: [
    "pizza",
    "sub",
    "burger",
    "momos",
    "noodles",
    "chinese food",
    "combo",
    "student combo",
    "party pack",
    "whatsapp order",
    "new pizza and sub",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f2e9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-body antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFab />
        </CartProvider>
      </body>
    </html>
  );
}
