import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action Recieved', action); //For logging only. Not needed for application functionality.

  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state] // inserts new data in existing array
  }

  return state;
}
