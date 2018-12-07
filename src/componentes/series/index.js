import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _success, _error, _clear } from '../../base/acciones/alerta.Acciones';
import seriesMain from './seriesMain';

const mapStateToProps = state => ({
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje,
  color: state.alerta.color
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _success,
      _error,
      _clear
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(seriesMain);
