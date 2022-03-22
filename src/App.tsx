
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Layout from './components/Layout/Layout';
import theme from "./helpers/theme";
import { useInitialData } from './hooks/useInitialData/useInitialData';

function App() {
  useInitialData()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
