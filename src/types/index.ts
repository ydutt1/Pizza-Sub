export interface SizeOption {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  sizes?: SizeOption[];
  isVeg?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedSize?: string;
}

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
};

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  date: string;
}
