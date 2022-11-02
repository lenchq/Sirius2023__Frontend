import React from 'react';
import { InputField } from './InputField';

export class LoginForm extends React.Component {
  render() {
    return (
      <>
        <div id="formText">
          Форма входа пользователя киберспортиного клуба
        </div>
        <div className="form loginForm">
          <InputField placeholder='Логин' />
          <InputField password={true} placeholder='Пароль' />
        </div>
      </>
    );
      
  }
}
