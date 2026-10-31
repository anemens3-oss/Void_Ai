export type CategoryType = 'all' | 'men' | 'women' | 'accessories';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  code: string;
  price: number;
  category: 'men' | 'women' | 'accessories';
  tag?: string;
  sizes: string[];
  colors: ProductColor[];
  description: string;
  details: string[];
  materials: string;
  weight: string;
  images: string[];
  featured?: boolean;
  inStock: boolean;
}

export interface CartItem {
  cartId: string;
  productId: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: number;
}
