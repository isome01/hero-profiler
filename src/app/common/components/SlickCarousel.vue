<template>
  <div :style="`${this.getStyleStringFromObj(this.style)}`" :class="`${this.class}`">
    <h3 v-if="this.showTitle">{{ this.title }}</h3>
    <VueSlickCarousel v-bind="this.slickConfig" :dots="true" :arrows="true">
      <div v-for="(src, i) in this.imgURLS" :key="`${this.slickId}-${i}`" :style="`${this.getStyleStringFromObj(this.imageStyle)}`">
        <img
            :src="`${src}`"
            :alt="`${src}`"
            :style="`${this.getStyleStringFromObj(this.imageStyle)}`"
            data-lazy="`${src}`"
        />
      </div>
      <slot />
    </VueSlickCarousel>
  </div>
</template>

<script>
  import {getStyleStringFromObj} from '../../../config'
  import VueSlickCarousel from 'vue-slick-carousel'

  export default ({
    name: 'SlickCarousel',
    props: {
      slickConfig: {
        type: Object,
        default: {}
      },
      style: {
        type: Object,
        default: {}
      },
      imageStyle: {
        type: Object,
        default: {}
      },
      class: {
        type: String,
        default: {}
      },
      showTitle: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
      },
      imgURLS: {
        required: true,
        type: Array
      }
    },
    data () {
      return {
        slickId: `${this.title}-carousel`,
        slickSettings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          infinite: true,
          dots: true,
          ...this.slickConfig
        }
      }
    },
    methods: {
      getStyleStringFromObj
    },
    components: {
      VueSlickCarousel
    }
  })
</script>

<style>

</style>
