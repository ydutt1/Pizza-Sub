import { MenuItem, Category, Testimonial } from "@/types";

// Image pools per category (high-quality Unsplash food photos)
const IMG = {
  pizza: [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=400&fit=crop",
  ],
  wrap: [
    "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400&h=400&fit=crop",
  ],
  sub: [
    "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1554433607-66b5a31b0141?w=400&h=400&fit=crop",
  ],
  sandwich: [
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=400&fit=crop",
  ],
  burger: [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop",
  ],
  salad: [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
  ],
  noodles: [
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop",
  ],
  rice: [
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=400&fit=crop",
  ],
  momos: [
    "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=400&fit=crop",
  ],
  starter: [
    "https://images.unsplash.com/photo-1562967916-eb82221dfb44?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&h=400&fit=crop",
  ],
  soup: [
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=400&h=400&fit=crop",
  ],
  tandoori: [
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=400&fit=crop",
  ],
  roll: [
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1548507200-79f5e1e0e3fb?w=400&h=400&fit=crop",
  ],
  coffee: [
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
  ],
  shake: [
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1553787499-6f9133860278?w=400&h=400&fit=crop",
  ],
  mojito: [
    "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
  ],
  sides: [
    "https://images.unsplash.com/photo-1573140247611-7076dd0de670?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
  ],
  combo: [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=400&fit=crop",
  ],
};

const img = (pool: string[], i: number) => pool[i % pool.length];

export const categories: Category[] = [
  { id: "pizzas", name: "🍕 Pizzas", slug: "pizzas", icon: "🍕" },
  { id: "wraps", name: "🌯 Veg Wraps", slug: "wraps", icon: "🌯" },
  { id: "subs", name: "🥖 Veg Subs", slug: "subs", icon: "🥖" },
  { id: "sandwiches", name: "🥪 Sandwiches", slug: "sandwiches", icon: "🥪" },
  { id: "burgers", name: "🍔 Burgers", slug: "burgers", icon: "🍔" },
  { id: "salads", name: "🥗 Veg Salads", slug: "salads", icon: "🥗" },
  { id: "sides", name: "🍞 Sides", slug: "sides", icon: "🍞" },
  { id: "noodles", name: "🍜 Noodles", slug: "noodles", icon: "🍜" },
  { id: "fried-rice", name: "🍚 Fried Rice", slug: "fried-rice", icon: "🍚" },
  { id: "momos", name: "🥟 Momos", slug: "momos", icon: "🥟" },
  { id: "starters", name: "🔥 Starters", slug: "starters", icon: "🔥" },
  { id: "soups", name: "🍲 Soups", slug: "soups", icon: "🍲" },
  { id: "tandoori", name: "🫕 Tandoori", slug: "tandoori", icon: "🫕" },
  { id: "rolls", name: "🧆 Rolls", slug: "rolls", icon: "🧆" },
  { id: "cold-coffee-shakes", name: "☕ Coffee & Shakes", slug: "cold-coffee-shakes", icon: "☕" },
  { id: "mojito-icetea", name: "🍹 Mojito & Ice Tea", slug: "mojito-icetea", icon: "🍹" },
  { id: "easy-money", name: "💸 Easy Money", slug: "easy-money", icon: "💸" },
];

export const menuItems: MenuItem[] = [
  // ═══════════════════════════════════════
  // 🍕 PIZZAS (S / M / L)
  // ═══════════════════════════════════════
  {
    id: "pizza-simply-veggie",
    name: "Simply Veggie Pizza",
    description: "Cheese + onion / capsicum / sweet corn / tomato — single topping",
    price: 79,
    category: "pizzas",
    image: "/images/menu/simply-veggie-pizza.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 79 },
      { label: "M", price: 199 },
      { label: "L", price: 290 },
    ],
  },
  {
    id: "pizza-veggie-delight",
    name: "Veggie Delight",
    description: "Cheese + onion + capsicum + sweet corn topping",
    price: 110,
    category: "pizzas",
    image: "/images/menu/veggie-delight.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 110 },
      { label: "M", price: 229 },
      { label: "L", price: 329 },
    ],
  },
  {
    id: "pizza-double-cheese-margarita",
    name: "Double Cheese Margarita",
    description: "Overloaded with cheese on neapolitan style crust, perfectly baked & seasoned",
    price: 150,
    category: "pizzas",
    image: "/images/menu/double-cheese-margarita.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 150 },
      { label: "M", price: 310 },
      { label: "L", price: 410 },
    ],
  },
  {
    id: "pizza-funky-tandoori-mushroom",
    name: "Funky Tandoori Mushroom",
    description: "Cheese & BBQ mushroom pizza with fresh onion, capsicum + jalapeños",
    price: 210,
    category: "pizzas",
    image: "/images/menu/funky-tandoori-mushroom.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 210 },
      { label: "M", price: 320 },
      { label: "L", price: 430 },
    ],
  },
  {
    id: "pizza-tandoori-paneer-tikka",
    name: "Tandoori Paneer Tikka",
    description: "Paneer tikka chunks, onion, tomato, capsicum & cheese — a flavourful adventure",
    price: 150,
    category: "pizzas",
    image: "/images/menu/tandoori-paneer-tikka.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 150 },
      { label: "M", price: 310 },
      { label: "L", price: 410 },
    ],
  },
  {
    id: "pizza-vegy-veggie",
    name: "Vegy Veggie Pizza",
    description: "Loaded with onion, capsicum, tomato, broccoli, jalapeño, olive, red & yellow pepper",
    price: 170,
    category: "pizzas",
    image: img(IMG.pizza, 5),
    isVeg: true,
    sizes: [
      { label: "S", price: 170 },
      { label: "M", price: 250 },
      { label: "L", price: 350 },
    ],
  },
  {
    id: "pizza-everything-on-it",
    name: "Everything On It",
    description: "Cheese, paneer, baby corn, onion, capsicum, tomato, jalapeño, black olives & dressing",
    price: 179,
    category: "pizzas",
    image: "/images/menu/everything-on-it.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 179 },
      { label: "M", price: 299 },
      { label: "L", price: 420 },
    ],
  },
  {
    id: "pizza-spicy-fire",
    name: "Spicy Fire Pizza",
    description: "Cheese + spicy paneer + green chilly + jalapeño, red paprika & onion",
    price: 189,
    category: "pizzas",
    image: "/images/menu/spicy-fire-pizza.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 189 },
      { label: "M", price: 309 },
      { label: "L", price: 419 },
    ],
  },
  {
    id: "pizza-fantastic-italian",
    name: "Fantastic Italian",
    description: "Fresh onion, green chilly, paneer chunk, mushrooms, black olive — covered with cheese",
    price: 220,
    category: "pizzas",
    image: "/images/menu/fantastic-italian.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 220 },
      { label: "M", price: 329 },
      { label: "L", price: 439 },
    ],
  },
  {
    id: "pizza-the-maxicano",
    name: "The Maxicano",
    description: "Cheese + jalapeño, tandoori sauce base, golden corn, red onion, red paprika & tomato chunks",
    price: 220,
    category: "pizzas",
    image: "/images/menu/the-maxicano.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 220 },
      { label: "M", price: 329 },
      { label: "L", price: 450 },
    ],
  },
  {
    id: "pizza-king-choice",
    name: "King Choice Pizza",
    description: "Ring onion, tomato, jalapeño, black olive, paneer, red paprika, sweet corn dressing cheese",
    price: 229,
    category: "pizzas",
    image: "/images/menu/king-choice-pizza.png",
    isVeg: true,
    sizes: [
      { label: "S", price: 229 },
      { label: "M", price: 359 },
      { label: "L", price: 509 },
    ],
  },

  // ═══════════════════════════════════════
  // 🌯 VEG WRAPS
  // ═══════════════════════════════════════
  { id: "wrap-veggie-delite", name: "Veggie Delite Wrap", description: "Fresh veggies wrapped in a soft tortilla", price: 69, category: "wraps", image: "/images/menu/wrap-veggie-delite.png", isVeg: true },
  { id: "wrap-aloo-patty", name: "Aloo Patty Wrap", description: "Crispy aloo patty with fresh veggies & chutney", price: 79, category: "wraps", image: "/images/menu/wrap-aloo-patty.png", isVeg: true },
  { id: "wrap-veg-shammi", name: "Veg Shammi Kabab Wrap", description: "Flavourful shammi kabab in a warm tortilla", price: 79, category: "wraps", image: "/images/menu/wrap-veg-shammi.png", isVeg: true },
  { id: "wrap-veg-seekh", name: "Veg Sheek Kabab Wrap", description: "Spiced seekh kabab wrapped with onions & sauce", price: 79, category: "wraps", image: "/images/menu/wrap-veg-seekh.png", isVeg: true },
  { id: "wrap-hara-bhara", name: "Hara Bhara Kabab Wrap", description: "Green spinach & pea kabab wrapped in a soft tortilla", price: 79, category: "wraps", image: "/images/menu/wrap-hara-bhara.png", isVeg: true },
  { id: "wrap-falafel", name: "Falafel Kebab Wrap", description: "Crispy falafel with hummus & fresh veggies", price: 79, category: "wraps", image: "/images/menu/wrap-falafel.png", isVeg: true },
  { id: "wrap-paneer-tikka", name: "Paneer Tikka Wrap", description: "Marinated paneer tikka with spicy sauce & veggies", price: 99, category: "wraps", image: "/images/menu/wrap-paneer-tikka.png", isVeg: true },

  // ═══════════════════════════════════════
  // 🥖 VEG SUBS
  // ═══════════════════════════════════════
  { id: "sub-veggie-delite", name: "Veggie Delite Sub", description: "Fresh garden veggies on a toasted sub roll", price: 99, category: "subs", image: "/images/menu/sub-veggie-delite.png", isVeg: true },
  { id: "sub-aloo-patty", name: "Aloo Patty Sub", description: "Crispy aloo patty with fresh fillings on sub roll", price: 140, category: "subs", image: "/images/menu/sub-aloo-patty.png", isVeg: true },
  { id: "sub-corn-peas", name: "Corn & Peas Sub", description: "Sweet corn & peas filling with special sauce", price: 140, category: "subs", image: "/images/menu/sub-corn-peas.png", isVeg: true },
  { id: "sub-hara-bhara", name: "Hara Bhara Kabab Sub", description: "Green kabab patty on a toasted sub roll", price: 130, category: "subs", image: "/images/menu/sub-hara-bhara.png", isVeg: true },
  { id: "sub-veg-shammi", name: "Veg Shammi Kabab Sub", description: "Flavourful shammi kabab on a fresh sub roll", price: 140, category: "subs", image: "/images/menu/sub-veg-shammi.png", isVeg: true },
  { id: "sub-paneer-tikka", name: "Paneer Tikka Sub", description: "Marinated paneer tikka with spicy sauce & cheese", price: 150, category: "subs", image: "/images/menu/sub-paneer-tikka.png", isVeg: true },
  { id: "sub-fala-fel", name: "Fala Fel Sub", description: "Crispy falafel with hummus & fresh veggies on sub", price: 150, category: "subs", image: img(IMG.sub, 0), isVeg: true },
  { id: "sub-veg-seekh", name: "Veg Seekh Kabab Sub", description: "Spiced seekh kabab on a hearty sub roll", price: 150, category: "subs", image: "/images/menu/sub-veg-seekh.png", isVeg: true },

  // ═══════════════════════════════════════
  // 🥪 SANDWICHES
  // ═══════════════════════════════════════
  { id: "sandwich-classic-veg", name: "Classic Veg Sandwich", description: "Fresh veggies with butter & chutney on toasted bread", price: 69, category: "sandwiches", image: img(IMG.sandwich, 0), isVeg: true },
  { id: "sandwich-bombay-street", name: "Bombay Street Sandwich", description: "Mumbai-style masala sandwich with tangy chutney", price: 79, category: "sandwiches", image: "/images/menu/sandwich-bombay-street.png", isVeg: true },
  { id: "sandwich-cottage-cheese", name: "Cottage Cheese Sandwich", description: "Creamy cottage cheese with herbs on grilled bread", price: 109, category: "sandwiches", image: "/images/menu/sandwich-cottage-cheese.png", isVeg: true },
  { id: "sandwich-tandoori-cheese", name: "Tandoori Cheese Sandwich", description: "Tandoori spiced cheese filling on toasted bread", price: 100, category: "sandwiches", image: "/images/menu/sandwich-tandoori-cheese.png", isVeg: true },

  // ═══════════════════════════════════════
  // 🍔 BURGERS
  // ═══════════════════════════════════════
  { id: "burger-aloo-patty", name: "Aloo Patty Burger", description: "Crispy aloo patty with lettuce, tomato & special sauce", price: 60, category: "burgers", image: "/images/menu/burger-aloo-patty.png", isVeg: true },
  { id: "burger-veg-patty", name: "Veg Patty Burger", description: "Crunchy veg patty with fresh veggies & mayo", price: 79, category: "burgers", image: "/images/menu/burger-veg-patty.png", isVeg: true },
  { id: "burger-paneer-patty", name: "Paneer Patty Burger", description: "Spiced paneer patty with cheese, lettuce & tandoori mayo", price: 120, category: "burgers", image: "/images/menu/burger-paneer-patty.png", isVeg: true },

  // ═══════════════════════════════════════
  // 🥗 VEG SALADS
  // ═══════════════════════════════════════
  { id: "salad-exotic-veggie", name: "Exotic Veggie Salad", description: "Fresh garden veggies with a tangy vinaigrette dressing", price: 139, category: "salads", isVeg: true },
  { id: "salad-aloo-patty", name: "Aloo Patty Salad", description: "Crispy aloo patty crumbles on a fresh green salad", price: 159, category: "salads", isVeg: true },
  { id: "salad-paneer-tikka", name: "Paneer Tikka Salad", description: "Grilled paneer tikka pieces on a bed of greens", price: 169, category: "salads", isVeg: true },
  { id: "salad-corn-peas", name: "Corn & Peas Salad", description: "Sweet corn & peas tossed with fresh veggies", price: 159, category: "salads", isVeg: true },
  { id: "salad-hara-bhara", name: "Hara Bhara Kabab Salad", description: "Green kabab crumbles on a nutritious salad bowl", price: 159, category: "salads", isVeg: true },
  { id: "salad-veg-shammi", name: "Veg Shammi Kabab Salad", description: "Shammi kabab pieces with fresh greens & dressing", price: 159, category: "salads", isVeg: true },
  { id: "salad-veg-seekh", name: "Veg Seekh Kabab Salad", description: "Seekh kabab slices on a fresh salad bowl", price: 159, category: "salads", isVeg: true },
  { id: "salad-falafel", name: "Fala Fel Salad", description: "Crispy falafel with hummus on a fresh salad", price: 159, category: "salads", isVeg: true },

  // ═══════════════════════════════════════
  // 🍞 SIDES
  // ═══════════════════════════════════════
  { id: "side-garlic-bread-plain", name: "Garlic Bread Stick (Plain Cheese)", description: "Toasted bread sticks with garlic butter & melted cheese", price: 89, category: "sides", image: "/images/menu/side-garlic-bread-plain.png", isVeg: true },
  { id: "side-garlic-bread-corn", name: "Garlic Bread Stick (Corn + Jalapeño)", description: "Cheese bread with sweet corn, cheese & spicy jalapeño", price: 99, category: "sides", image: "/images/menu/side-garlic-bread-corn.png", isVeg: true },
  { id: "side-garlic-bread-paneer", name: "Garlic Bread Stick (Cheese + Paneer)", description: "Loaded with paneer crumbles, cheese & garlic butter", price: 109, category: "sides", image: "/images/menu/side-garlic-bread-paneer.png", isVeg: true },
  { id: "side-cheese-dip", name: "Cheese Dip", description: "Creamy cheese dip — perfect with garlic bread", price: 30, category: "sides", image: "/images/menu/side-cheese-dip.png", isVeg: true },
  { id: "side-choco-lava", name: "Choco Lava Cake", description: "Warm chocolate cake with molten lava center", price: 69, category: "sides", image: img(IMG.sides, 1), isVeg: true },

  // ═══════════════════════════════════════
  // 🍜 NOODLES (Half / Full)
  // ═══════════════════════════════════════
  { id: "noodles-veg", name: "Veg Noodles", description: "Stir-fried noodles with fresh vegetables", price: 60, category: "noodles", image: "/images/menu/noodles-veg.png", isVeg: true, sizes: [{ label: "Half", price: 60 }, { label: "Full", price: 110 }] },
  { id: "noodles-hakka", name: "Hakka Noodles", description: "Classic Indo-Chinese hakka noodles with veggies", price: 60, category: "noodles", image: "/images/menu/noodles-hakka.png", isVeg: true, sizes: [{ label: "Half", price: 60 }, { label: "Full", price: 110 }] },
  { id: "noodles-chilli-garlic", name: "Chilli Garlic Noodles", description: "Spicy chilli garlic flavored noodles with veggies", price: 80, category: "noodles", image: "/images/menu/noodles-chilli-garlic.png", isVeg: true, sizes: [{ label: "Half", price: 80 }, { label: "Full", price: 140 }] },
  { id: "noodles-sehezwan", name: "Sehezwan Noodles", description: "Fiery schezwan sauce tossed noodles with vegetables", price: 90, category: "noodles", image: "/images/menu/noodles-sehezwan.png", isVeg: true, sizes: [{ label: "Half", price: 90 }, { label: "Full", price: 160 }] },
  { id: "noodles-homestyle", name: "Homestyle Noodles", description: "Comfort-style noodles with homestyle seasoning", price: 70, category: "noodles", image: "/images/menu/noodles-homestyle.png", isVeg: true, sizes: [{ label: "Half", price: 70 }, { label: "Full", price: 130 }] },
  { id: "noodles-hongkong", name: "Hongkong Noodles", description: "Crispy Hongkong-style noodles with spicy sauce", price: 120, category: "noodles", image: "/images/menu/noodles-hongkong.png", isVeg: true, sizes: [{ label: "Half", price: 120 }, { label: "Full", price: 200 }] },
  { id: "noodles-singapuri", name: "Singapuri Noodles", description: "Spiced Singapore-style stir-fried rice noodles", price: 70, category: "noodles", image: "/images/menu/noodles-singapuri.png", isVeg: true, sizes: [{ label: "Half", price: 70 }, { label: "Full", price: 130 }] },

  // ═══════════════════════════════════════
  // 🍚 FRIED RICE (Half / Full)
  // ═══════════════════════════════════════
  { id: "rice-veg", name: "Veg Fried Rice", description: "Classic fried rice with mixed vegetables", price: 60, category: "fried-rice", image: img(IMG.rice, 0), isVeg: true, sizes: [{ label: "Half", price: 60 }, { label: "Full", price: 110 }] },
  { id: "rice-egg", name: "Egg Fried Rice", description: "Wok-tossed rice with scrambled eggs & veggies", price: 70, category: "fried-rice", image: img(IMG.rice, 1), sizes: [{ label: "Half", price: 70 }, { label: "Full", price: 130 }] },
  { id: "rice-sehezwan", name: "Veg Sehezwan Rice", description: "Fiery schezwan flavored fried rice with veggies", price: 90, category: "fried-rice", image: img(IMG.rice, 0), isVeg: true, sizes: [{ label: "Half", price: 90 }, { label: "Full", price: 160 }] },
  { id: "rice-paneer", name: "Paneer Fried Rice", description: "Fried rice loaded with soft paneer cubes", price: 70, category: "fried-rice", image: img(IMG.rice, 1), isVeg: true, sizes: [{ label: "Half", price: 70 }, { label: "Full", price: 140 }] },
  { id: "rice-chilli-garlic", name: "Chilli Garlic Rice", description: "Spicy chilli garlic flavored fried rice", price: 70, category: "fried-rice", image: img(IMG.rice, 0), isVeg: true, sizes: [{ label: "Half", price: 70 }, { label: "Full", price: 130 }] },
  { id: "rice-box", name: "Box Rice", description: "Packed box rice with special seasoning", price: 140, category: "fried-rice", image: img(IMG.rice, 1), isVeg: true },
  { id: "rice-singapuri", name: "Singapuri Fried Rice", description: "Singapore-style spiced fried rice", price: 80, category: "fried-rice", image: img(IMG.rice, 0), isVeg: true, sizes: [{ label: "Half", price: 80 }, { label: "Full", price: 150 }] },

  // ═══════════════════════════════════════
  // 🥟 MOMOS (Half / Full)
  // ═══════════════════════════════════════
  { id: "momos-veg-steam", name: "Veg Momos (Steam)", description: "Soft steamed dumplings with veggie filling & spicy chutney", price: 40, category: "momos", image: "/images/menu/momos-veg-steam.png", isVeg: true, sizes: [{ label: "Half", price: 40 }, { label: "Full", price: 80 }] },
  { id: "momos-veg-fry", name: "Veg Momos (Fry)", description: "Crispy fried dumplings with veggie filling & chutney", price: 50, category: "momos", image: "/images/menu/momos-veg-fry.png", isVeg: true, sizes: [{ label: "Half", price: 50 }, { label: "Full", price: 90 }] },
  { id: "momos-paneer-steam", name: "Paneer Momos (Steam)", description: "Steamed dumplings with rich paneer stuffing", price: 50, category: "momos", image: "/images/menu/momos-paneer-steam.png", isVeg: true, sizes: [{ label: "Half", price: 50 }, { label: "Full", price: 100 }] },
  { id: "momos-paneer-fry", name: "Paneer Momos (Fry)", description: "Crispy fried paneer stuffed dumplings", price: 60, category: "momos", image: "/images/menu/momos-paneer-fry.png", isVeg: true, sizes: [{ label: "Half", price: 60 }, { label: "Full", price: 110 }] },
  { id: "momos-veg-kurkure", name: "Veg Kurkure Momos", description: "Extra crunchy kurkure coated veg momos", price: 110, category: "momos", image: "/images/menu/momos-veg-kurkure.png", isVeg: true },
  { id: "momos-paneer-kurkure", name: "Paneer Kurkure Momos", description: "Extra crunchy kurkure coated paneer momos", price: 130, category: "momos", image: "/images/menu/momos-paneer-kurkure.png", isVeg: true },
  { id: "momos-veg-chilli", name: "Veg Chilli Momos", description: "Tossed in spicy chilli sauce — Indo-Chinese style", price: 100, category: "momos", image: "/images/menu/momos-veg-chilli.png", isVeg: true },
  { id: "momos-paneer-chilli", name: "Paneer Chilli Momos", description: "Paneer momos tossed in hot chilli sauce", price: 120, category: "momos", image: "/images/menu/momos-paneer-chilli.png", isVeg: true },
  { id: "momos-veg-tandoori", name: "Veg Tandoori Momos", description: "Smoky tandoori grilled veg momos with chutney", price: 120, category: "momos", image: "/images/menu/momos-veg-tandoori.png", isVeg: true },
  { id: "momos-paneer-tandoori", name: "Paneer Tandoori Momos", description: "Smoky tandoori grilled paneer momos", price: 120, category: "momos", image: "/images/menu/momos-paneer-tandoori.png", isVeg: true },

  // ═══════════════════════════════════════
  // 🔥 STARTERS (Half / Full)
  // ═══════════════════════════════════════
  { id: "starter-chilli-potato", name: "Chilli Potato", description: "Crispy potato fingers tossed in spicy chilli sauce", price: 60, category: "starters", image: "/images/menu/starter-chilli-potato.png", isVeg: true, sizes: [{ label: "Half", price: 60 }, { label: "Full", price: 110 }] },
  { id: "starter-honey-chilli-potato", name: "Honey Chilli Potato", description: "Sweet & spicy honey glazed crispy potato fingers", price: 70, category: "starters", image: "/images/menu/starter-honey-chilli-potato.png", isVeg: true, sizes: [{ label: "Half", price: 70 }, { label: "Full", price: 130 }] },
  { id: "starter-mushroom-chilli", name: "Mushroom Chilli", description: "Button mushrooms tossed in hot chilli sauce", price: 80, category: "starters", image: "/images/menu/starter-mushroom-chilli.png", isVeg: true, sizes: [{ label: "Half", price: 80 }, { label: "Full", price: 150 }] },
  { id: "starter-soya-chilli", name: "Soya Chilli", description: "Crispy soya chunks in spicy Indo-Chinese chilli sauce", price: 60, category: "starters", image: "/images/menu/starter-soya-chilli.png", isVeg: true, sizes: [{ label: "Half", price: 60 }, { label: "Full", price: 110 }] },
  { id: "starter-paneer-65", name: "Paneer 65", description: "Spiced & deep-fried paneer cubes — restaurant style", price: 240, category: "starters", image: "/images/menu/starter-paneer-65.png", isVeg: true },
  { id: "starter-veg-manchurian", name: "Veg Manchurian (Dry/Gravy)", description: "Crispy veg balls in spicy manchurian sauce", price: 90, category: "starters", image: "/images/menu/starter-veg-manchurian.png", isVeg: true, sizes: [{ label: "Half", price: 90 }, { label: "Full", price: 160 }] },
  { id: "starter-crispy-corn", name: "Crispy Corn", description: "Golden fried corn kernels with spicy seasoning", price: 70, category: "starters", image: "/images/menu/starter-crispy-corn.png", isVeg: true, sizes: [{ label: "Half", price: 70 }, { label: "Full", price: 130 }] },
  { id: "starter-chilli-paneer", name: "Chilli Paneer (Dry/Gravy)", description: "Soft paneer cubes in fiery chilli sauce with peppers", price: 130, category: "starters", image: "/images/menu/starter-chilli-paneer.png", isVeg: true, sizes: [{ label: "Half", price: 130 }, { label: "Full", price: 240 }] },

  // ═══════════════════════════════════════
  // 🍲 SOUPS
  // ═══════════════════════════════════════
  { id: "soup-tomato", name: "Tomato Soup", description: "Classic creamy tomato soup", price: 80, category: "soups", image: img(IMG.soup, 0), isVeg: true },
  { id: "soup-manchow", name: "Veg Manchow Soup", description: "Spicy Indo-Chinese manchow with crispy noodles on top", price: 70, category: "soups", image: img(IMG.soup, 1), isVeg: true },
  { id: "soup-hot-chilli", name: "Hot & Chilli Soup", description: "Fiery hot soup with chilli flakes & vegetables", price: 100, category: "soups", image: img(IMG.soup, 0), isVeg: true },
  { id: "soup-lemonade-coriander", name: "Lemonade Coriander Soup", description: "Refreshing lemon coriander soup — light & tangy", price: 100, category: "soups", image: img(IMG.soup, 1), isVeg: true },
  { id: "soup-sweet-corn", name: "Sweet Corn Soup", description: "Creamy sweet corn soup with fresh vegetables", price: 90, category: "soups", image: "/images/menu/soup-sweet-corn.png", isVeg: true },

  // ═══════════════════════════════════════
  // 🫕 TANDOORI (Half / Full)
  // ═══════════════════════════════════════
  { id: "tandoori-mushroom-tikka", name: "Mushroom Tikka Fries", description: "Tandoor grilled mushrooms with crispy fries", price: 120, category: "tandoori", image: img(IMG.tandoori, 0), isVeg: true, sizes: [{ label: "Half", price: 120 }, { label: "Full", price: 200 }] },
  { id: "tandoori-paneer-malai", name: "Paneer Malai Tikka", description: "Creamy malai marinated paneer grilled in tandoor", price: 130, category: "tandoori", image: img(IMG.tandoori, 1), isVeg: true, sizes: [{ label: "Half", price: 130 }, { label: "Full", price: 220 }] },
  { id: "tandoori-veg-malai-momos", name: "Veg Malai Momos", description: "Creamy malai coated momos grilled to perfection", price: 90, category: "tandoori", image: "/images/menu/tandoori-veg-malai-momos.png", isVeg: true, sizes: [{ label: "Half", price: 90 }, { label: "Full", price: 180 }] },
  { id: "tandoori-paneer-malai-momos", name: "Paneer Malai Momos", description: "Rich paneer momos in creamy malai tandoori marinade", price: 120, category: "tandoori", image: "/images/menu/tandoori-paneer-malai-momos.png", isVeg: true, sizes: [{ label: "Half", price: 120 }, { label: "Full", price: 210 }] },

  // ═══════════════════════════════════════
  // 🧆 ROLLS
  // ═══════════════════════════════════════
  { id: "roll-veg", name: "Veg Roll", description: "Fresh veggies rolled in a flaky paratha", price: 50, category: "rolls", image: "/images/menu/roll-veg.png", isVeg: true },
  { id: "roll-single-egg", name: "Single Egg Roll", description: "Egg omelette wrapped in a flaky paratha", price: 60, category: "rolls", image: "/images/menu/roll-single-egg.png" },
  { id: "roll-double-egg", name: "Double Egg Roll", description: "Double egg stuffed roll with onions & chutney", price: 70, category: "rolls", image: "/images/menu/roll-double-egg.png" },
  { id: "roll-triple-egg", name: "Triple Egg Roll", description: "Loaded triple egg roll for egg lovers", price: 80, category: "rolls", image: "/images/menu/roll-triple-egg.png" },
  { id: "roll-paneer", name: "Paneer Roll", description: "Spiced paneer filling in a crispy paratha roll", price: 90, category: "rolls", image: "/images/menu/roll-paneer.png", isVeg: true },
  { id: "roll-paneer-tikka", name: "Paneer Tikka Roll", description: "Tandoori paneer tikka in a flaky roll", price: 160, category: "rolls", image: "/images/menu/roll-paneer-tikka.png", isVeg: true },
  { id: "roll-veg-manchurian", name: "Veg Manchurian Roll", description: "Manchurian balls wrapped in a crispy roll", price: 100, category: "rolls", image: "/images/menu/roll-veg-manchurian.png", isVeg: true },
  { id: "roll-paneer-egg", name: "Paneer Egg Roll", description: "Paneer & egg combo wrapped in flaky paratha", price: 100, category: "rolls", image: "/images/menu/roll-paneer-egg.png" },
  { id: "roll-veg-noodles", name: "Veg Noodles Roll", description: "Stir-fried noodles packed in a crispy roll", price: 70, category: "rolls", image: "/images/menu/roll-veg-noodles.png", isVeg: true },
  { id: "roll-paneer-noodles", name: "Paneer Noodles Roll", description: "Paneer noodles filling in a warm roll", price: 90, category: "rolls", image: "/images/menu/roll-paneer-noodles.png", isVeg: true },
  { id: "roll-veg-spring", name: "Veg Spring Roll (2pcs)", description: "Crispy fried spring rolls with veggie filling", price: 80, category: "rolls", image: "/images/menu/roll-veg-spring.png", isVeg: true },
  { id: "roll-paneer-spring", name: "Paneer Spring Roll (2pcs)", description: "Crispy spring rolls stuffed with spiced paneer", price: 120, category: "rolls", image: "/images/menu/roll-paneer-spring.png", isVeg: true },

  // ═══════════════════════════════════════
  // ☕ COLD COFFEE & MILK SHAKES (S / R)
  // ═══════════════════════════════════════
  { id: "drink-cold-coffee", name: "Cold Coffee Special", description: "Rich & creamy cold coffee blended to perfection", price: 39, category: "cold-coffee-shakes", image: "/images/menu/drink-cold-coffee.png", isVeg: true, sizes: [{ label: "S", price: 39 }, { label: "R", price: 59 }] },
  { id: "drink-hazelnuts-coffee", name: "Hazelnuts Cold Coffee", description: "Cold coffee with rich hazelnut flavour", price: 49, category: "cold-coffee-shakes", image: "/images/menu/drink-hazelnuts-coffee.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 69 }] },
  { id: "drink-caramel-coffee", name: "Caramel Cold Coffee", description: "Sweet caramel swirl cold coffee", price: 49, category: "cold-coffee-shakes", image: "/images/menu/drink-caramel-coffee.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 69 }] },
  { id: "drink-oreo-shake", name: "Oreo Shake", description: "Thick & creamy Oreo cookie milkshake", price: 49, category: "cold-coffee-shakes", image: "/images/menu/drink-oreo-shake.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 69 }] },
  { id: "drink-vanilla-shake", name: "Vanilla Milk Shake", description: "Classic vanilla milkshake — smooth & creamy", price: 49, category: "cold-coffee-shakes", image: "/images/menu/drink-vanilla-shake.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 69 }] },
  { id: "drink-chocolate-shake", name: "Chocolate Milk Shake", description: "Rich chocolate milkshake with cocoa goodness", price: 49, category: "cold-coffee-shakes", image: "/images/menu/drink-chocolate-shake.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 69 }] },
  { id: "drink-kitkat-shake", name: "Kit Kat Milk Shake", description: "Blended Kit Kat bar milkshake — crunchy & sweet", price: 49, category: "cold-coffee-shakes", image: "/images/menu/drink-kitkat-shake.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 69 }] },
  { id: "drink-strawberry-shake", name: "Strawberry Milk Shake", description: "Fresh strawberry flavored creamy milkshake", price: 49, category: "cold-coffee-shakes", image: "/images/menu/drink-strawberry-shake.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 69 }] },
  { id: "drink-butterscotch-shake", name: "Butterscotch Milk Shake", description: "Sweet butterscotch flavored milkshake with crunch", price: 49, category: "cold-coffee-shakes", image: "/images/menu/drink-butterscotch-shake.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 69 }] },

  // ═══════════════════════════════════════
  // 🍹 MOJITO & ICE TEA (S / R)
  // ═══════════════════════════════════════
  { id: "drink-mint-mojito", name: "Mint Mojito", description: "Refreshing mint mojito with crushed ice & lime", price: 39, category: "mojito-icetea", image: "/images/menu/drink-mint-mojito.png", isVeg: true, sizes: [{ label: "S", price: 39 }, { label: "R", price: 69 }] },
  { id: "drink-watermelon-mojito", name: "Watermelon Mojito", description: "Sweet watermelon flavored mojito — summer vibes", price: 49, category: "mojito-icetea", image: "/images/menu/drink-watermelon-mojito.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 79 }] },
  { id: "drink-green-apple-mojito", name: "Green Apple Mojito", description: "Tangy green apple mojito with fresh mint", price: 49, category: "mojito-icetea", image: "/images/menu/drink-green-apple-mojito.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 79 }] },
  { id: "drink-blueberry-mojito", name: "Blue Berry Mojito", description: "Vibrant blueberry mojito with a refreshing twist", price: 49, category: "mojito-icetea", image: "/images/menu/drink-blueberry-mojito.png", isVeg: true, sizes: [{ label: "S", price: 49 }, { label: "R", price: 79 }] },
  { id: "drink-masala-lemonade", name: "Masala Lemonade Mojito", description: "Indian-style masala lemonade with spicy kick", price: 39, category: "mojito-icetea", image: img(IMG.mojito, 0), isVeg: true, sizes: [{ label: "S", price: 39 }, { label: "R", price: 69 }] },
  { id: "drink-tangy-mango", name: "Tangy Mango", description: "Sweet & tangy mango drink — tropical refreshment", price: 39, category: "mojito-icetea", image: "/images/menu/drink-tangy-mango.png", isVeg: true, sizes: [{ label: "S", price: 39 }, { label: "R", price: 69 }] },
  { id: "drink-lemon-icetea", name: "Lemon Ice Tea", description: "Chilled lemon-flavored iced tea — refreshing", price: 39, category: "mojito-icetea", image: img(IMG.mojito, 0), isVeg: true, sizes: [{ label: "S", price: 39 }, { label: "R", price: 69 }] },
  { id: "drink-peach-icetea", name: "Peach Ice Tea", description: "Sweet peach flavored iced tea — cool & fruity", price: 39, category: "mojito-icetea", image: "/images/menu/drink-peach-icetea.png", isVeg: true, sizes: [{ label: "S", price: 39 }, { label: "R", price: 69 }] },

  // ═══════════════════════════════════════
  // 💸 EASY MONEY COMBOS
  // ═══════════════════════════════════════
  {
    id: "easy-1",
    name: "Under ₹99 Snacker",
    description: "Veg Roll + Lemon Ice Tea (S) — quick bite under a hundred!",
    price: 89,
    category: "easy-money",
    badge: "💸 UNDER ₹99",
    isVeg: true,
  },
  {
    id: "easy-2",
    name: "Sandwich Sip Combo",
    description: "Classic Veg Sandwich + Cold Coffee Special (S)",
    price: 99,
    category: "easy-money",
    badge: "💸 VALUE",
    isVeg: true,
  },
  {
    id: "easy-3",
    name: "Garlic Bread Deal",
    description: "Garlic Bread Stick (Plain) + Cheese Dip + Mint Mojito (S)",
    price: 149,
    category: "easy-money",
    badge: "💸 VALUE",
    isVeg: true,
  },
  {
    id: "easy-4",
    name: "Burger Meal Deal",
    description: "Veg Patty Burger + Chilli Potato (Half) + Cold Drink",
    price: 179,
    category: "easy-money",
    badge: "💸 VALUE",
    isVeg: true,
  },
  {
    id: "easy-5",
    name: "Pizza + Coffee Combo",
    description: "Simply Veggie Pizza (S) + Cold Coffee Special (R)",
    price: 129,
    category: "easy-money",
    badge: "💸 VALUE",
    isVeg: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ankit S.",
    text: "Best pizza in town! The cheese pull is insane and momos are so juicy. My go-to place for hangouts with friends.",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Priya M.",
    text: "The student combos are a lifesaver! Great food at pocket-friendly prices. Hostel special is my favorite ❤️",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Rahul K.",
    text: "Ordered the party pack for my birthday and everyone loved it. Fresh food, quick delivery via WhatsApp. Highly recommend!",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    name: "Sneha D.",
    text: "Their chilli garlic noodles and paneer kurkure momos combo is to die for! Such a cozy place to eat. Love the vibe.",
    rating: 4,
    date: "1 month ago",
  },
  {
    name: "Vikram R.",
    text: "King Choice Pizza is absolute fire! 🔥 Best value for money. Been ordering from here since they opened.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Megha T.",
    text: "The honey chilli potato and cold coffee combo is heavenly. Clean place, friendly staff, and fast service!",
    rating: 5,
    date: "3 months ago",
  },
];

export const siteConfig = {
  cafeName: "New Pizza & Sub",
  cafeTagline: "Taste That Brings You Back",
  whatsappNumber: "919548487848",
  cafePhone: "+91 95484 87848",
  cafeAddress: "", // Owner will add later
  cafeHours: "11:00 AM - 11:00 PM (All Days)",
  googleReviewsUrl: "https://maps.google.com", // Owner will add actual link
  googleMapsUrl: "https://maps.app.goo.gl/VG97rfQPJ1mT6Hqs5?g_st=ic",
  googleMapsEmbed: "", // Owner can add <iframe> src URL here later if needed
  establishedYear: "2022",
  yearsOfService: 3,
};
