import React from 'react'

export default ({ input, label }) => { //props from redux-form (awesome!!!)
  return (
    <div>
      <label>{label}</label>
      <input {...input}/>
    </div>
  )
}