import './App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;