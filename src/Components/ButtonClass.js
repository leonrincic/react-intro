import React from 'react';

class ButtonClass extends React.Component{
    render(){
        return(
            <button onClick={this.props.onClick}>
                {this.props.label}
            </button>
        );
    }
}

export default ButtonClass;
