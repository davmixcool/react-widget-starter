import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import WidgetTemplate from '../WidgetTemplate';

storiesOf('Bulma Examples', module)
  .add('Danger Notice', () => (
    <WidgetTemplate >
            <div styleName="notification is-danger">
                <button onClick={action('delete clicked!')} styleName="delete"></button>
                Danger lorem ipsum dolor sit amet, consectetur
                adipiscing elit lorem ipsum dolor sit amet,
                consectetur adipiscing elit
            </div>

  </WidgetTemplate>
  ))
  .add('Box', () => (
    <WidgetTemplate >
      <div styleName="box">lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit
    </div>

      </WidgetTemplate>
  )).add('Buttons', () => (
      <WidgetTemplate >
        <a styleName="button">Button</a>
        <a styleName="button is-primary">Primary</a>
        <a styleName="button is-info">Info</a>
        <a styleName="button is-success">Success</a>
        <a styleName="button is-warning">Warning</a>
        <a styleName="button is-danger">Danger</a>
        <a styleName="button is-link">Link</a>

        </WidgetTemplate>
    )).add('Progress', () => (
        <WidgetTemplate >
          <progress styleName="progress" value="15" max="100">15%</progress>
          <progress styleName="progress is-primary" value="30" max="100">30%</progress>
          <progress styleName="progress is-info" value="45" max="100">45%</progress>
          <progress styleName="progress is-success" value="60" max="100">60%</progress>
          <progress styleName="progress is-warning" value="75" max="100">75%</progress>
          <progress styleName="progress is-danger" value="90" max="100">90%</progress>

          </WidgetTemplate>
      ))
    ;
