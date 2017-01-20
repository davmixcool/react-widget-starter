import React from 'react';
import ReactDOM from 'react-dom';
import WidgetTemplate from './components/WidgetTemplate';


ReactDOM.render(
  <WidgetTemplate  >Inner Content</WidgetTemplate>,
  document.getElementById('app')
);



if (module.hot) {
  module.hot.accept();
}
