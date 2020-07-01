import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import '../../Todo2/Todo2.css';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input id="to-do-form" className="container"
        placeholder="Enter Task"
        ref={node => (input = node)} />
        <button className="btn btn-info" type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)