import React from 'react';
import _uniqueId from 'lodash/uniqueId';

export interface IPolicyCheckboxProps {
  children: string | string[] | JSX.Element | JSX.Element[];
}


export class PolicyCheckbox extends React.Component<IPolicyCheckboxProps> {
  id: string;
  constructor(props: IPolicyCheckboxProps) {
    super(props);
    this.id = _uniqueId("prefix-");
  }

  //@ts-ignore
  render() {
    return (
      <div className="policyCheckbox">
        <input type="checkbox" id={this.id} required />
        <label htmlFor={this.id}>{this.props.children}</label>
      </div>
    );
  }
}
