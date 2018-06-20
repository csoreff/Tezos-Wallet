export const Theme = {
  colors: {
    // Basic colors
    primary: '#123262',
    secondary: '#7691c4',
    accent: '#2c7df7',
    light: '#FAFBFB',
    disabled: '#C8D0D3',
    transparent: 'transparent',

    // State colors
    error: '#F22121',
    success: '#18CE7E',

    // Regular colors
    white: '#FFFFFF',

    // Gray colors
    darkGray: '#191414'
  },
  animations: {
    defaultTime: '300ms',
    secondaryTime: '450ms',
  },
  animationCurves: {
    defaultCurve: 'cubic-bezier(0.23, 1, 0.32, 1) ',
  },
  typo: {
    fontFamily: {
      primary: "'Roboto', sans-serif",
    },
    weights: {
      light: 300,
      normal: 500,
      bold: 700,
    },
  },
  layers: {
    top: 1000,
    middle: 900,
    bottom: 800,
  },
}

export default Theme
