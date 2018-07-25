import {
  combineReducers
} from 'redux';
import dataReducer from './dataReducer';

const reducers = combineReducers({
  fileData: dataReducer
});

export default reducers;