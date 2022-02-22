import React from 'react';


const Button =function (props) {
  return (
    <button type={props.type} className='button' onClick={props.onClick}>{props.onClick}
        </button>
  )
}

export default Button