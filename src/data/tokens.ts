import { Token } from '../types/token';

export const tokens: Token[] = [
  {
    id: 'base-token',
    name: 'Base Token',
    description: 'Token básico para el servidor',
    prices: [
      { amount: 3, price: 0.89, originalPrice: 1.50 },
      { amount: 5, price: 1.34, originalPrice: 2.00 },
      { amount: 10, price: 1.79, originalPrice: 3.00 }
    ],
    icon: '/images/tokens/base.svg',
    color: '#ff9d00'
  },
  {
    id: 'falltrap-token',
    name: 'Falltrap Token',
    description: 'Token especial para trampas de caída',
    prices: [
      { amount: 3, price: 0.89, originalPrice: 1.50 },
      { amount: 5, price: 1.34, originalPrice: 2.00 },
      { amount: 10, price: 1.79, originalPrice: 3.00 }
    ],
    icon: '/images/tokens/falltrap.svg',
    color: '#00ff9d'
  }
];