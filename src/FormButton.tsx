import React from 'react';

export interface IFormButtonProps {
    onclick: React.MouseEventHandler<HTMLDivElement>;
    title: string;
    active: boolean;
}

export interface IFormButtonState {
    active: boolean;
}

class FormButton extends React.Component<IFormButtonProps, IFormButtonState> {
    constructor(props: IFormButtonProps) {
        super(props);
        this.state = {
            active: props.active,
        }
    }


    render() {
        let isActive = this.state.active ? {"data-active": ""} : {};
        return (
            <button className="btn"
            {...isActive}
            //@ts-ignore
            onClick={this.props.onclick}>
                {/*<span className="btnText">*/}
                    {this.props.title}
                {/*</span>*/}
            </button>  
        )
    }
}

export default FormButton