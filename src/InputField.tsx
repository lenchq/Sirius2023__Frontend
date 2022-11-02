import React from 'react';
import { Asterrisk } from './Asterrisk';

export interface IInputFieldProps {
  placeholder: string;
  password?: boolean;
  required?: boolean;
};

export interface IInputFieldState {
  password?: boolean;
}

export class InputField extends React.Component<IInputFieldProps, IInputFieldState> {
  constructor(props: IInputFieldProps) {
    super(props);

    this.state = {
      password: props.password,
    };
  }

  render() {
    var hideBtn = <></>;
    var required = <></>;
    if (this.props.password) {
      hideBtn = (
        <div className="psw-icon psw-btn">
          <img
           onClick={() => {this.setState({password: !this.state.password})}}
           src="glaz.svg"
           alt="" />
        </div>
      );
    }
    if (this.props.required) {
      required = (
        <div className="psw-icon psw-rq">
          <Asterrisk fill="white"/>
        </div>
      )
    }

    return (
      <div className="inputBox">
        <input type={this.state.password ? "password" : "text"}
          placeholder={this.props.placeholder} />
        {hideBtn}
        {required}
      </div>

    );
  }
}
