import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routesapp';
import { theme } from './assets/css/materialtheme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesApp />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
