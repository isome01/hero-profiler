<template>
  <div class='modal-backdrop' @click="this.handleHide()" />
  <div class='modal'>
    <div :class="`${this.modalClass} modal-content ${this.class}`">
      <div class='modal-header'>
        {{ this.title }}
        <span class='modal-close' @click="handleHide()">&times;</span>
      </div>
      <div class='row modal-body'>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      style: {
        type: Object,
        default: {}
      },
      class: {
        type: String,
        default: ''
      },
      modalClass: {
        type: String,
        default: ''
      },
      handleHide: {
        type: Function,
        required: true
      },
      title: {
        type: String,
        default: ''
      },
      large: {
        type: Boolean,
        default: false
      },
    }
  }
</script>

<style>

.modal-backdrop {
  position: fixed;
  display: block;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #000;
}

.modal {
  animation: slidingFadeInAnimation;
  opacity: 0;
  position: fixed;
  display: block;
  top: -500px;
  left: 0;
  z-index: 2;
  padding-top: 100px;
  width: 100%;
  background-color: transparent;
}

.modal-content {
  background-color: #fff;
  border: solid #eee 2px;
  padding: 25px;
}

.modal-header {
  font-size: 1.5rem;
}

.modal-close {
  font-size: 1.5rem;
  transition: font-weight 1s;
  color: gray;
  cursor: pointer;
  padding: 5px;
}

.modal-close:hover {

}

.modal-body {

}

</style>
