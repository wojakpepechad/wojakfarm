// The sacred Wojak color palette - handle with feels
export const theme = {
  colors: {
    // Backgrounds
    bg: '#0f1114',
    bgCard: '#1a1d23',
    bgCardHover: '#22262e',
    bgInput: '#13151a',
    bgNavbar: 'rgba(15, 17, 20, 0.85)',

    // Wojak signature colors
    wojakYellow: '#f5c518',
    wojakGold: '#d4a017',
    wojakGreen: '#4ade80',
    wojakRed: '#f87171',
    wojakBlue: '#60a5fa',

    // Text
    textPrimary: '#f1f1f1',
    textSecondary: '#9ca3af',
    textMuted: '#6b7280',

    // Borders & accents
    border: '#2a2e37',
    borderHover: '#3a3f4a',
    accent: '#f5c518',
    accentHover: '#d4a017',

    // Status
    success: '#4ade80',
    warning: '#fbbf24',
    danger: '#f87171',
  },

  fonts: {
    heading: "'DK Frozen Memory', sans-serif",
    body: "'Manrope', 'Avenir Next', sans-serif",
    mono: "'Fira Code', 'Roboto Mono', monospace",
  },

  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    pill: '9999px',
  },

  shadows: {
    card: '0 4px 24px rgba(0, 0, 0, 0.3)',
    cardHover: '0 8px 40px rgba(245, 197, 24, 0.08)',
    glow: '0 0 20px rgba(245, 197, 24, 0.15)',
    navbar: '0 1px 12px rgba(0, 0, 0, 0.4)',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const;
