// import { IS_LOGIN, USER_NAME, USER_PASSWORD } from "../actions/action-type";
// import { FETCH_USER } from '../actions/types';
import { SISTEMA_INGRESAR, SISTEMA_SALIR } from '../acciones/constantes';

const user = localStorage.getItem('user');
const initialState = user ? { auth: true, user } : { auth: false};


export default function(state = initialState, action) {
  switch (action.type) {
    case SISTEMA_INGRESAR:
      return {
        ...state,
        auth: true,
        usuario: action.payload
      };
    case SISTEMA_SALIR:
      return {
        auth: false
      };
    default:
      return state;
  }
}
