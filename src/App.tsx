import React from 'react';
import { CyberLogo } from './CyberLogo';
import './style/App.scss';
import ZoneWidget from './ZoneWidget';
import { PolicyCheckbox } from './PolicyCheckbox';
import { LoginForm } from './LoginForm';
import FormButton from './FormButton';
import { AppAd } from './AppAd';
import { KeyboardLayout } from './KeyboardLayout';
import { RegisterForm } from './RegisterForm';

interface IAppState {
  formType: FormType;
}

enum FormType {
  Login,
  Register
};

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      formType: FormType.Login,
    };
  }

  render() {
    return (
      <div className="App">
        <div id="flexbox">
          <div id='mainbox'>
            <CyberLogo/>
            <div className="formBox">
              
              {this.state.formType === FormType.Login && 
                <LoginForm/>
              }
              {this.state.formType === FormType.Register && 
                <RegisterForm/>
              }
              <PolicyCheckbox>Согласен(а) с правилами посещения комплекса клуба</PolicyCheckbox>
              <PolicyCheckbox>Согласен(а) с политикой обработки персональных данных</PolicyCheckbox>
          
  
              <div className="buttons">
                <FormButton
                  onclick={() => this.setState({formType: FormType.Login})}
                  title="ВХОД"
                  active={this.state.formType === FormType.Login}
                />
                <FormButton
                  onclick={() => this.setState({formType: FormType.Register})}
                  title="РЕГИСТРАЦИЯ"
                  active={!(this.state.formType === FormType.Login)}
               />
              </div>
              
            </div>
            <AppAd/>
            
            <KeyboardLayout/>
          </div>
          <div className="sideMenu">
            <span>88</span>
            <ZoneWidget zoneType='standart'/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
