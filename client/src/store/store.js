import {
  createStore
} from 'redux';
import reducers from '../reducers';

const Store = createStore(
  reducers
);

export default Store;