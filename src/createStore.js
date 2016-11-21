export default function createStore(reducer){

  let state = []
  let listeners = []

  function getState(){
    return state
  }

  function subscribe(listener) {
   listeners.push(listener);
  };

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach( listener => listener() )
  }

  return {getState: getState, dispatch: dispatch, subscribe: subscribe}

}
