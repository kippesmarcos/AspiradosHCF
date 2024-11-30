import { Rank } from '../types/rank';

export const ranks: Rank[] = [
  {
    id: 'runner',
    name: 'Runner',
    price: { permanent: 4.99, monthly: 1.99 },
    color: '#00ff00',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    `)}`,
    features: [
      'Chat color verde',
      'Prefijo [Runner]',
      'Acceso a /kit runner',
      '2 homes adicionales',
      'Acceso a /fly en zonas seguras'
    ]
  },
  {
    id: 'bolt',
    name: 'Bolt',
    price: { permanent: 9.99, monthly: 3.99 },
    color: '#ffcc00',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        <path d="M12 2l2 6h5l-4 4 2 6-5-3-5 3 2-6-4-4h5l2-6z"/>
      </svg>
    `)}`,
    features: [
      'Todos los beneficios de Runner',
      'Chat color dorado',
      'Prefijo [Bolt]',
      'Acceso a /kit bolt',
      '4 homes adicionales',
      'Acceso a /feed'
    ]
  },
  {
    id: 'light',
    name: 'Light',
    price: { permanent: 14.99, monthly: 5.99 },
    color: '#00ffff',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    `)}`,
    features: [
      'Todos los beneficios anteriores',
      'Chat color aqua',
      'Prefijo [Light]',
      'Acceso a /kit light',
      '6 homes adicionales',
      'Acceso a /heal'
    ]
  },
  {
    id: 'dynamic',
    name: 'Dynamic',
    price: { permanent: 24.99, monthly: 9.99 },
    color: '#9900ff',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
      </svg>
    `)}`,
    features: [
      'Todos los beneficios anteriores',
      'Chat color púrpura',
      'Prefijo [Dynamic]',
      'Acceso a /kit dynamic',
      '8 homes adicionales',
      'Acceso a /enderchest'
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: { permanent: 49.99, monthly: 19.99 },
    color: '#00ccff',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    `)}`,
    features: [
      'Todos los beneficios anteriores',
      'Chat color celeste',
      'Prefijo [Advanced]',
      'Acceso a /kit advanced',
      '10 homes adicionales',
      'Acceso a /craft'
    ]
  }
];