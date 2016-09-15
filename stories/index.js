import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import WidgetTemplate from '../WidgetTemplate.jsx';
//require('WidgetTemplate.story.js');


storiesOf('Widget Template', module)
  .add('Hello World', () => (
    <WidgetTemplate onClick={action('clicked')}>Hello Button</WidgetTemplate>
  ))
  .add('Testing Cool Stuff!', () => (
    <WidgetTemplate onClick={action('clicked')}>😀 😎 👍 💯</WidgetTemplate>
  ));
