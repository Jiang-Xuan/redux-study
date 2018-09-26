import React from 'react'
import PropTypes from 'prop-types'
import { VisibilityFilters } from '../actions'
import FilterLink from '../containers/FilterLink'

const Footer = () => {
  return (
    <p>
      Show:{' '}
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>SHOW_ALL --- </FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        SHOW_ACTIVE
      </FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        SHOW_COMPLETED
      </FilterLink>
    </p>
  )
}

export default Footer
