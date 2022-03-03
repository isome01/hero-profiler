<template>
  <div :class="`page-cover steel-rose-parallax ${this.class}`">
    <div :class="`steel-rose-parallax-element-layer
          ${this.showParallaxScroll && 'steel-rose-parallax-element-layer--back'} ${this.layerClassName}`"
         :style="`background-image: ${this.backgroundImage}`"
    >
    <div
        v-if="`${!this.hidePageTint}`"
        :style="`background: ${this.rgba};height: 100%; width: 100%`"
    />
  </div>
  <div :class="`steel-rose-parallax-element-layer steel-rose-parallax-element-layer--base ${this.layerClassName}`">
    <slot />
  </div>
  </div>
</template>

<script setup>
  import $ from 'jquery'
  defineProps({
    style: {
      type: Object,
      default: {}
    },
    className: {
      type: String,
      default: ''
    },
    imageURL: {
      type: String,
      default: ''
    },
    showParallaxScroll: {
      type: Boolean,
      default: true
    },
    hidePageTint: {
      type: Boolean,
      default: false
    },
    pageTintDarkness: {
      type: String,
      default: 'dark'
    },
    layerStyle: {
      type: Object,
      default: {}
    },
    layerClassName: {
      type: String,
      default: ''
    },
    isLightHue: {
      type: Boolean,
      default: false
    }
  })
</script>

<script>

  // $(document).ready(() => {
  //   const children = pageCover.current.children[1].children
  //   const totalHeight = [...children].reduce((a, b) => {
  //     const aHeight = $(a).outerHeight()
  //     const bHeight = $(b).outerHeight()
  //     return aHeight + bHeight
  //   })

    //console.log(totalHeight)
  // })
  const darkness = {
    'lightest': 0,
    'lighter': .05,
    'light': .1,
    'dark': .25,
    'darker': .45,
    'darkest': .65
  }
  export default {
    name: 'PageCover',
    methods() {

    },
    data() {
      return {
        rgba: '',
        backgroundImage: ''
      }
    },
    mounted() {

      this.backgroundImage = `url("${this.imageURL}")`
      this.rgba = this.isLightHue
          ? `rgba(255, 255, 255, ${darkness[this.pageTintDarkness]})`
          : `rgba(0, 0, 0, ${darkness[this.pageTintDarkness]})`
    },
  }
</script>

<style>
  /* style.css */

  .steel-rose-parallax {
    perspective: 10px; /* this is how the elements inside the parallax will shift in perspective on scroll */
    position: relative;
  }

  .steel-rose-parallax-element-layer {
    position: absolute;
    width: inherit;
    height: inherit;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
  }

  .page-cover {
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    display: block;
  }

  @media only screen and (min-width: 568px) {
    .steel-rose-parallax-element-layer--base {
      /* everything to be rendered on the foreground */
      transform: translateZ(0);
      background-color: transparent;
    }

    .steel-rose-parallax-element-layer--back {
      /* background parallax semantics */
      transform: translateZ(-1px) scale(1.13);
      z-index: -100;
    }
  }

  @media only screen and (max-width: 576px){
    .steel-rose-parallax-element-layer--back {
      background-size: auto;
      background-color: black;
    }
    .page-cover {
      height: 100vh;
    }
  }
</style>
