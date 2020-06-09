import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

function Stars(props) {
  const count = props.count

  return (
    <>
      <span className="sr-only">{count + ' Star Rating'}</span>
      <ul className="card-body-stars u-clearfix">
        {count >= 1 && count <= 5 && Array(count).fill(<Star />)}
      </ul>
    </>
  )
}

// Set default value:
Stars.defaultProps = {
  props: { count: 0 },
}

Stars.propTypes = {
  props: PropTypes.shape({
    count: PropTypes.number,
  }),
}

export default Stars
