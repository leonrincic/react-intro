import React from 'react'

const ButtonFunction = ({onClick, label})=>{
    return(
        <button onClick={onClick}>
            {label}
        </button>
    );

};

export default ButtonFunction;