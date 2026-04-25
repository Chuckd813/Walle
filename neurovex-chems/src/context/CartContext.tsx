import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductVariant } from '../lib/utils';

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: ProductVariant;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, variant?: ProductVariant) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('neurovex_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('neurovex_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, variant?: ProductVariant) => {
    setCart(prev => {
      const existing = prev.find(item => 
        item.id === product.id && 
        (!variant || item.selectedVariant?.id === variant.id)
      );
      
      if (existing) {
        return prev.map(item =>
          (item.id === product.id && (!variant || item.selectedVariant?.id === variant.id))
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      
      return [...prev, { ...product, quantity: 1, selectedVariant: variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, variantId?: string) => {
    setCart(prev => prev.filter(item => 
      !(item.id === productId && (!variantId || item.selectedVariant?.id === variantId))
    ));
  };

  const updateQuantity = (productId: string, quantity: number, variantId?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }
    setCart(prev =>
      prev.map(item => 
        (item.id === productId && (!variantId || item.selectedVariant?.id === variantId))
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => {
    const price = item.selectedVariant ? item.selectedVariant.price : item.price;
    return sum + price * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
