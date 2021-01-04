/*

model : redux ducks

*/

//actions
const START_TIMER = 'start-timer';
const RESTART_TIMER = 'restart-timer';
const ADD_SECOND = 'add-second';

//action creators
const startTimer = () => ({type: START_TIMER});
const restartTimer = () => ({type: RESTART_TIMER});
const addSecond = () => ({type: ADD_SECOND});

//reducer
const TIMER_DURATION = 1500;
const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER: {
      return applyStartTimer(state);
    }
    case RESTART_TIMER: {
      return applyRestartTimer(state);
    }
    case ADD_SECOND: {
      return applyAddSecond(state);
    }
  }
};

//reducer functions
function applyStartTimer(state) {
  return {
    ...state,
    isPlaying: true,
  };
}

function applyRestartTimer(state) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0,
  };
}

function applyAddSecond(state) {
  if (state.elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1,
    };
  } else {
    return {
      ...state,
      isPlaying: false,
    };
  }
}

//export action creator
const actionCreator = {
  startTimer,
  restartTimer,
  addSecond,
};

//export reducer
export default reducer;
