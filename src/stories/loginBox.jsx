import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import LoginBox from '../components/LoginBox';

const stories = storiesOf('LoginBox', module);

stories.addDecorator(withKnobs);

const defaultChange = (e) => {
  e.preventDefault();
  window.alert('typing!');
};

const defaultLogin = (e) => {
  e.preventDefault();
  window.alert('logging in');
};

stories
  .add('component with dummy functions', () => (
    <LoginBox
      username={text('username', 'username')}
      password={text('password', 'password')}
      usernameChange={defaultChange}
      passwordChange={defaultChange}
      login={defaultLogin}
    />));
