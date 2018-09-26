import { connect } from 'react-redux'
import { VisibilityFilters, toggleTodo } from '../actions'
import TodoList from '../components/TodoList.jsx'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED: {
      return todos.filter(i => i.completed)
    }
    case VisibilityFilters.SHOW_ACTIVE: {
      return todos.filter(i => !i.completed)
    }
    case VisibilityFilters.SHOW_ALL:
    default: {
      return todos
    }
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClickDispatch: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
