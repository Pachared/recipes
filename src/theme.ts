import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#191715',
      secondary: '#6d6963',
    },
    primary: {
      main: '#b83030',
      dark: '#8d2020',
      contrastText: '#ffffff',
    },
    divider: '#dedbd5',
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      '"Noto Sans Thai", "Tahoma", "Avenir Next", "Segoe UI", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 0.92,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1,
    },
    h3: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 800,
      letterSpacing: 0,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: 'none',
          minHeight: 42,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
})
