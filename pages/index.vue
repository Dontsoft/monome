<template>
  <div class="container">
    <span class="button">
      Hello
    </span>
    <span class="button button--primary">
      Hello 2
    </span>
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

  .button--primary {
    margin-top: $padding-xl;
  }
}
</style>