import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <>
    {/* 
      
      button property:
      content - button content
      variant - button types: "outline" or "default" or "link"
      
    */}
    <button className={(props.variant=="default")?"btn btn-default":((props.variant=="outline")?"btn btn-outline":((props.variant=="link")?"btn btn-link":"btn"))}>{props.content}</button>
    </>
  )
}

export default Button