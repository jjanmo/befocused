// like container
// here is redux logic
// container - presenter relation

import {connect} from 'react-redux';
import Timer from './presenter';

function mapStateToProps(state) {
  const {isPlaying, elapsedTime, timerDuration} = state;

  return {
    isPlaying,
    elapsedTime,
    timerDuration,
  };
}
//mapStateToProps : 건네받은 state를 해당 컴퍼넌트에 props으로 전달하는 함수
//이름 그대로 이해해보자.

export default connect(mapStateToProps)(Timer);
