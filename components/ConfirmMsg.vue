<template>
  <div
    class="modal__content--inner small-message__modal"
    :class="modalsize"
  >
    <div class="modal__content--body">
      <button type="button" class="btn btn-close" @click="$emit('closeModal')"></button>
      <slot name="msg"></slot>
    </div>
    <div class="modal__content--footer">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: String,
    modalsize: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style>

</style>