import {
  ALERTA_SATISFACTORIA,
  ALERTA_ERROR,
  // ALERTA_ADVERTENCIA,
  // ALERTA_INFO,
  ALERTA_LIMPIAR,
  SISTEMA_INGRESAR,
  SISTEMA_SALIR
} from './constantes';

export const _cmdSistemaIngresar = item => {
  return (dispatch, getState, apiSeries) => {
    apiSeries
      .post('/api/cat_usuarios/login', item)
      .then(response => {
        localStorage.setItem('user', item.email);
        localStorage.setItem('token', response.data.id);
        localStorage.setItem('userId', response.data.userId);
        dispatch({
          type: SISTEMA_INGRESAR,
          payload: response.data
        });
        dispatch({
          type: ALERTA_SATISFACTORIA,
          payload: 'ingreso correcto cód. ' + response.status
        });
      })
      .catch(error => {
        if (error.response) {
          dispatch({
            type: ALERTA_ERROR,
            payload: error.response.data.error.message
          });
        } else if (error.request) {
          dispatch({
            type: ALERTA_ERROR,
            payload: error.message
          });
        } else {
          console.log(error.message);
        }
      });
    dispatch({
      type: ALERTA_LIMPIAR
    });
  };
};

export const _cmdSistemaSalir = () => {
  return (dispatch, getState, apiSeries) => {
    // const token = getState().ingreso.usuario.id;
    // const token = localStorage.getItem('token');
    apiSeries
      .post('/api/cat_usuarios/logout')
      .then(response => {
        localStorage.clear();
        dispatch({
          type: SISTEMA_SALIR
        });
        dispatch({
          type: ALERTA_SATISFACTORIA,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ALERTA_ERROR,
          payload: error
        });
      });
    dispatch({
      type: ALERTA_LIMPIAR
    });
  };
};
