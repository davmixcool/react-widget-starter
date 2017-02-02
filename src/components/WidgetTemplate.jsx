import React, { Component, PropTypes  } from 'react';
import CSSModules from 'react-css-modules';

import Sass from '../sass/style.scss';
import proptypes from '../lib/proptypes';

class WidgetTemplate extends Component {

  //###################### PROPERTIES
  state = {}

  static propTypes = {
    title: proptypes.optionalString;
  }

  static defaultProps = {
    title: 'Your Name'
  }

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

export default CSSModules(WidgetTemplate,Sass,{allowMultiple:true});
