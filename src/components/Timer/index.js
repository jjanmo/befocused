// like container
// here is redux logic
// container - presenter relation

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreator} from '../../reducers/timerReducer';
import Timer from './presenter';

function mapStateToProps(state) {
  const {isPlaying, elapsedTime, timerDuration} = state;

  return {
    isPlaying,
    elapsedTime,
    timerDuration,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(actionCreator.startTimer, dispatch),
    restartTimer: bindActionCreators(actionCreator.restartTimer, dispatch),
  };
}

//understanding just like function name!!
//mapStateToProps :  state를 해당 컴퍼넌트의 props으로 전달하는 함수
//mapDispatchToProps : dispatch를 해당 컴퍼넌트의 props로 전달하는 함수

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
