<template>
  <div class="container">
    <span class="button">
      Hello
    </span>
    <span class="button button--primary">
      Primary
    </span>
    <span class="button button--error">
      Error
    </span>
    <span class="button button--success">
      Success
    </span>
    <span class="button button--warning">
      Warning
    </span>
    <span class="button button--disabled">
      Hello
    </span>
    <span class="button button--primary button--disabled">
      Primary
    </span>
    <span class="button button--error button--disabled">
      Error
    </span>
    <span class="button button--success button--disabled">
      Success
    </span>
    <span class="button button--warning button--disabled">
      Warning
    </span>
    <div class="input">
      <label for="" class="input__label">Test</label>
      <input type="text" name="" id="" class="input__text">
    </div>
    <div class="input">
      <label for="" class="input__label">Test</label>
      <textarea class="input__text"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button:not(:first-of-type) {
    margin-top: $padding-xl;
  }
}
</style>