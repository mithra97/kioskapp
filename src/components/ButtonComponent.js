import React from 'react'

function ButtonComponent(props) {
  return (

    <div className="button">
      <button className="btn btn-circle" onClick={() => props.handleClick(props.type)}>{props.type}</button>
    </div>
  )
}

export default ButtonComponent
