import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const themePalette = {
  BG: '#12181b',
  LIME: '#C8FA5F',
  FONT_GLOBAL: "'Jetbrains Mono', monospace",
  ERROR_MAIN: '#f44336',
  BG_ERROR_MAIN: 'rgba(244,67,54,0.1)',
  SUCCESS_MAIN: '#4CAF50',
  BG_SUCCESS_MAIN: 'rgba(76, 175, 80, 0.1)'
};

const theme = createTheme({
  palette: {
    mode: 'light', // Modo claro
    primary: {
      main: '#3f51b5', // Azul para el color principal
    },
    secondary: {
      main: '#f50057', // Rosa para el color secundario
    },
    background: {
      default: '#ffffff', // Fondo blanco
    },
    text: {
      primary: '#333333', // Texto principal oscuro
      secondary: '#666666', // Texto secundario más claro
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', // Fuente por defecto
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none', // Desactiva la transformación de texto
          boxShadow: 'none', // Sin sombra por defecto
          borderRadius: '0.5em', // Bordes redondeados suaves
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: '0.5em', // Bordes redondeados suaves
          fontSize: '1rem', // Tamaño de fuente base
        },
      },
    },
  },
});


export const ThemeConfig = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

