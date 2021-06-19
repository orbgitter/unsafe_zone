import { combineReducers } from 'redux';
import TrackReducer from './track-reducer';
import SearchReducer from './search-reducer';

const RootReducer = combineReducers ({
  track: TrackReducer,
  search: SearchReducer,
});

export default RootReducer