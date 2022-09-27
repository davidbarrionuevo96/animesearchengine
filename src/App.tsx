import React from 'react';
import LoginView from './views/login/LoginView';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
function App() {
  const theme = createTheme({
    palette: {
      background:{
        default:"rgb(43, 42, 51)",
        paper:"rgb(43, 42, 51)"
      },
      text: {
        primary: "#ffffff"
      }
    }
  });

  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <LoginView />
  </ThemeProvider>;
}

export default App;
