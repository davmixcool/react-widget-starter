import React, { Component, PropTypes  } from 'react';
import CSSModules from 'react-css-modules';


import Bulma from '../sass/style.scss';
//import Bulma from './wt.css';


class WidgetTemplate extends Component {

  render() {


    return <div styleName="section">
              <div styleName="container">{this.props.children}</div>
          </div>
  }
}

export default CSSModules(WidgetTemplate,Bulma,{allowMultiple:true});
