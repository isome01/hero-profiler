import React from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'
import * as styles from './Modal.module.css'

const Modal = ({title, children, style, className, handleHide, large}) => {
  const modalClass = large
    ? 'col-md-8 col-sm-8 col-xs-12 offset-md-2 offset-sm-2'
    : 'col-md-4 col-sm-4 col-xs-12 offset-md-4 offset-sm-4'

  const transitionModal = React.useCallback(()=> {
    $(document).ready(() => {
      const modal = $('.modal')
      if (typeof (modal) !== 'undefined' && modal.css('display') !== '') {
        const inverseTop = modal.css('top').replace('-', '')
        modal.animate({
          opacity: '+=1',
          top: `+=${inverseTop}`,
        })
      }
    })
  }, [handleHide])

  React.useEffect(() => {
    transitionModal()
  }, [transitionModal])

  return (
    <>
      <div className='modal-backdrop' onClick={() => handleHide()} />
      <div
        className='modal'
        style={{...style}}
      >
        <div className={`${modalClass} modal-content ${className}`}>
          <div className='modal-header'>
            {title}
            <span className='modal-close' onClick={() => handleHide()}>&times;</span>
          </div>
          <div className='row modal-body'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  handleHide: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  large: PropTypes.bool
}

Modal.defaultProps = {
  title: '',
  className: '',
  style: {},
  large: false
}

export default Modal
