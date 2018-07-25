import {
  createStore
} from 'redux';
import reducers from '../reducers';
import getJSONData from '../actions/data';

const Store = createStore(
  reducers
);
getJSONData;
export default Store;