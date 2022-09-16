import './App.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

import React from 'react';
import NavBar from './components/nav-bar/nav-bar';
import Routing from './routes';

const theme = createTheme({
	palette: {
		primary: {
			light: '#ffffff',
			main: '#eceff1',
			dark: '#babdbe',
			contrastText: '#000',
		},
		secondary: {
			light: '#b2fab4',
			main: '#81c784',
			dark: '#519657',
			contrastText: '#fff',
		},
	}
});

const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
	  <NavBar></NavBar>
	  	<Routing />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
