// ─── INTERIOR / CAFE PHOTOS ───────────────────────────────────────────
// This powers the "Take A Look Inside" gallery on the About page.
// Right now it points at placeholder stock photos so the layout has
// something to show. Replace them with real photos of your cafe:
//
// 1. Take (or export) photos of your dining area, counter, kitchen,
//    seating, signage, etc. Square-ish photos (close to 1:1) work best
//    since the grid crops to squares, except the first photo, which is
//    shown large and can be any shape.
// 2. Save the files into the `public/images/interior/` folder in this
//    project (create the folder if it doesn't exist). e.g.:
//      public/images/interior/dining-area.jpg
//      public/images/interior/counter.jpg
//      public/images/interior/kitchen.jpg
// 3. Reference them below with a leading slash, e.g. "/images/interior/dining-area.jpg"
//    (files in `public/` are served from the site root — you do NOT
//    write "public" in the path).
// 4. Add/remove entries freely — the gallery grid adjusts automatically.
//    The first item in the array is shown larger than the rest.
//
// Example once you have real photos:
// export const galleryImages = [
//   { src: "/images/interior/dining-area.jpg", alt: "Our seating area" },
//   { src: "/images/interior/counter.jpg", alt: "Order counter" },
//   { src: "/images/interior/kitchen.jpg", alt: "Our kitchen" },
// ];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=900&fit=crop",
    alt: "Cafe seating area",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&fit=crop",
    alt: "Counter and menu board",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=600&fit=crop",
    alt: "Cozy table setting",
  },
  {
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=600&fit=crop",
    alt: "Coffee counter",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=600&fit=crop",
    alt: "Interior view",
  },
];
