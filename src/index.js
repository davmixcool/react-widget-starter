import React from 'react';
import ReactDOM from 'react-dom';
import './redux/ReactotronConfig';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import WidgetTemplate from './components/WidgetTemplate';


ReactDOM.render(
    <Provider store={store}><WidgetTemplate  >Inner Content</WidgetTemplate></Provider>,
  document.getElementById('app')
);



if (module.hot) {
  module.hot.accept();
}
