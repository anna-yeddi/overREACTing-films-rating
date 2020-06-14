import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

function Stars({ count }) {
  // Update the page's title:
  useEffect(() => {
    document.title = `${count}* Film Ratings React Component`
  })

  // Check for number of stars
  const isValid = count >= 1 && count <= 5

  return (
    <>
      <p className="sr-only">{count + ' Star Rating'}</p>
      <ul className="card-body-stars u-clearfix">
        {isValid && Array.from({ length: count }, (_, i) => <Star key={i} />)}
      </ul>
    </>
  )
}

// Set default value:
Stars.defaultProps = {
  count: 0,
}

Stars.propTypes = {
  count: PropTypes.number,
}

export default Stars
