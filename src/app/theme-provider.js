'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Création du thème personnalisé pour Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#D62626', // Rouge japonais
    },
    secondary: {
      main: '#222222', // Noir élégant
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F8F8',
    },
  },
  typography: {
    fontFamily: 'var(--font-poppins)',
    h1: {
      fontFamily: 'var(--font-playfair)',
    },
    h2: {
      fontFamily: 'var(--font-playfair)',
    },
    h3: {
      fontFamily: 'var(--font-playfair)',
    },
    h4: {
      fontFamily: 'var(--font-playfair)',
    },
  },
});

export default function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Évite les erreurs d'hydratation en retardant le rendu des composants MUI
  // jusqu'à ce que le client soit prêt
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
} 