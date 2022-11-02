import React from 'react';
import { Asterrisk } from './Asterrisk';
import { InputField } from './InputField';


export class RegisterForm extends React.Component {
  render() {
    return (
      <>
        <div id="formText">
          Форма регистрации нового пользователя киберспортиного клуба
        </div>
        <div className="form loginForm">
          <InputField required={true} placeholder='Логин' />
          <InputField required={true} placeholder='ФИО' />
          <br />
          <InputField password={true} required={true} placeholder='Пароль' />
          <InputField password={true} required={true} placeholder='Подтверждение пароля' />
          <br />
          <InputField placeholder='8 (777) 777 77-77' />
          <InputField required={true} placeholder='Email' />
        </div>
        <div className="requiredText">
          <div className="asterrisk">
            <Asterrisk fill="#CA7B34"/>
          </div>
          Обязательное поле
        </div>
      </>
    );
      
  }
}
