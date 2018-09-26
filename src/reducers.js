import { combineReducers } from 'redux'

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

/**
 * @param {String} state 可视化过滤器状态
 * @param {{ type: String, filter: String}} action redux action
 */
function visibilityFilter(state = SHOW_ALL, action) {
  const { type } = action
  switch (type) {
    case SET_VISIBILITY_FILTER: {
      return action.filter
    }
    default: {
      return state
    }
  }
}

/**
 * @param {[{ text: String, completed: Boolean }]} todos todos 列表
 * @param {{ type: String, text?: String, index?: Number }} action redux action
 */
function todos(todos = [], action) {
  const { type } = action
  switch (type) {
    case ADD_TODO: {
      return [
        ...todos,
        {
          text: action.text,
          completed: false
        }
      ]
    }

    case TOGGLE_TODO: {
      return todos.map((todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    }
    default: {
      return todos
    }
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
