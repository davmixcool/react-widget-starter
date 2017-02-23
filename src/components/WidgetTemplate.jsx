import React, { Component, PropTypes  } from 'react';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';

import Sass from '../sass/style.scss';
import proptypes from '../lib/proptypes';

@connect((store)=>{
  return {
    store:store
  }
})
@CSSModules(Sass,{allowMultiple:true})
export default class WidgetTemplate extends Component {

  //###################### METHODS
    handleSubmit = (e) => {
      e.preventDefault()

    }

  //###################### RENDER

  render() {
    const {
      title
    } = this.props;

    return <div styleName="section">
              <div styleName="container">{this.props.children}</div>
          </div>
  }


}
