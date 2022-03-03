import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import * as styles from './PageCover.module.css'
import $ from 'jquery'


const PageCover = (
  {style, className, imageURL, children, showParallaxScroll, hidePageTint, pageTintDarkness,
    layerStyle, layerClassName, isLightHue}) => {
  const pageCover = React.useRef(null)
  useEffect(() => {
    $(document).ready(() => {
      const children = pageCover.current.children[1].children
      const totalHeight = [...children].reduce((a, b) => {
        const aHeight = $(a).outerHeight()
        const bHeight = $(b).outerHeight()
        return aHeight + bHeight
      })

      //console.log(totalHeight)
    })
  }, [pageCover])
  const backgroundImage = `url("${imageURL}")`
  const darkness = {
    'lightest': 0,
    'lighter': .05,
    'light': .1,
    'dark': .25,
    'darker': .45,
    'darkest': .65
  }
  const rgba = isLightHue
    ? `rgba(255, 255, 255, ${darkness[pageTintDarkness]})`
    : `rgba(0, 0, 0, ${darkness[pageTintDarkness]})`
  // Pretty much a parallax image cover
  return (
    <div ref={pageCover} className={`page-cover steel-rose-parallax ${className} `} style={style}>
      <div
        className={`steel-rose-parallax-element-layer ${
          showParallaxScroll && 'steel-rose-parallax-element-layer--back'
        } ${layerClassName}`}
        style={{backgroundImage, ...layerStyle}}
      >
        {!hidePageTint && (
          <div
            style={{
              background: rgba,
              height: '100%',
              width: '100%',
            }}
          />
        )}
      </div>
      <div
        className={`steel-rose-parallax-element-layer ${
          showParallaxScroll && 'steel-rose-parallax-element-layer--base'
        } ${layerClassName}`}
        style={{...layerStyle}}
      >
        {children}
      </div>
    </div>
  )
}

PageCover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  imageURL: PropTypes.string.isRequired,
  children: PropTypes.any,
  showParallaxScroll: PropTypes.bool,
  hidePageTint: PropTypes.bool,
  layerStyle: PropTypes.object,
  layerClassName: PropTypes.string,
  pageTintDarkness: PropTypes.oneOf([
    'lighter',
    'light',
    'dark',
    'darker',
    'darkest'
  ]),
  isLightHue: PropTypes.bool
}

PageCover.defaultProps = {
  style: {},
  layerStyle: {},
  className: '',
  layerClassName: '',
  pageTintDarkness: 'dark',
  showParallaxScroll: true
}

export default PageCover
