import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoClickDispatch }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            {...todo}
            onClick={() => onTodoClickDispatch(index)}
          />
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onTodoClickDispatch: PropTypes.func.isRequired
}

export default TodoList
