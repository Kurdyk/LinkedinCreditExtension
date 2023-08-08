import './App.css';
import muiTheme from 'theme';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from 'routes/shared/allRoutes';


const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
