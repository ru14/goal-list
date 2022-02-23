import React from 'react';
import './Button.css';


const Button =function (props) {
  return (
    <button type={props.type} className='button' onClick={props.onClick}>{props.onClick}
        </button>
  )
}

export default Button