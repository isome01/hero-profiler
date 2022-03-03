import React, {Fragment, useCallback, useEffect} from 'react'
import './AggressiveLink.module.css'
import $ from 'jquery'
import PropTypes from 'prop-types'

const transitions = ['left', 'center', 'right']

const AggressiveLink = ({id, style, className, url, text, transition, loading}) => {

  transition = (transitions.find(t => t === transition)) || 'left'
  const backdropClass = `dark-backdrop-${transitions.indexOf(transition) + 1}`

  useEffect(() => {
    $(document).ready(() => {
      switch (transition) {
        default:
          $(`#${id}`).hover(() => {
            const backdrop = $(`.${backdropClass}`).get(0)
            if (backdrop !== undefined) {
              backdrop.style.width = '100%'
              backdrop.style.opacity = 1
            }
          }, () => {
            const backdrop = $(`.${backdropClass}`).get(0)
            if (backdrop !== undefined) {
              backdrop.style.width = backdrop.style.minWidth
              backdrop.style.opacity = .55
            }
          })
      }
    })
  }, [backdropClass, transition])

  if (loading) {
    return null
  }
  return (
    <span className='aggressive'>
      <div className={backdropClass} style={{alignSelf: 'center'}}/>
      <a
        id={id}
        style={{...style}}
        className={`steel-rose-regalia-header aggressive ${className}`}
        href={url}
      >
        {text}
      </a>
    </span>
  )
}

AggressiveLink.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string,
  transition: PropTypes.string
}

AggressiveLink.defaultProps = {
  url: '#',
  style: {},
  className: '',
  text: '',
  loading: false
}

export default AggressiveLink
