import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3a3a43',
    },
    secondary: {
      main: '#2e7d32',
    },
    error: {
      main: '#b71c1c',
    },
    warning: {
      main: '#ff9100',
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 800,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 450,
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
