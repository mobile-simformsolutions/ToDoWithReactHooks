import {createStore, applyMiddleware} from 'redux';
import reducer from '../redux/reducers';
import ReduxThunk from 'redux-thunk';

const middleware = [ReduxThunk];
const store = createStore(reducer, applyMiddleware(...middleware));

export {store};
