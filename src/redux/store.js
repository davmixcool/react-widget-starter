import {applyMiddleware, createStore, compose} from 'redux';
import Reactotron from 'reactotron-react-js';
import './ReactotronConfig';
import { createLogger as logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default Reactotron.createStore(reducer, composeEnhancers(
    applyMiddleware(promise(), thunk, logger())
  ));
