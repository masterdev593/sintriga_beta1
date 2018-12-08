import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import blueGrey from '@material-ui/core/colors/common';
// import lightGreen from '@material-ui/core/colors/common';

import common from '@material-ui/core/colors/common';
import yellow from '@material-ui/core/colors/amber';
import Top from './top';
import Bot from './bot';
// import AppWrapper from '../componentes/wrapper';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: common['black'],
      main: common['black'],
      dark: common['black']
    },
    secondary: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700]
    },
    type: 'dark'
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Consolas',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

function importar(Component) {
  function conPlantilla(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Top propPosicion='fixed' propTitulo='Series de Intriga' />
          <Component {...props} />
        <Bot />
      </MuiThemeProvider>
    );
  }
  return conPlantilla;
}

importar.propTypes = {
  pageContext: PropTypes.object
};

export default importar;