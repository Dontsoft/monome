<template>
  <main>
    <navigation-bar></navigation-bar>
    <div class="content">
      <Nuxt />
    </div>
  </main>
</template>

<style lang="scss">

.content {
  padding-bottom: $height-xxl;
  width: 100vw;
  max-height: calc(100vh + #{$height-xxl});
  overflow-y: auto;
  overflow-x: hidden;
  @media screen and (min-width: $xl-display-size) {
    padding-bottom: initial;
    margin-left: $navigation-bar-width;
    width: calc(100vw - #{$navigation-bar-width});
    max-height: 100vh;
  }
}

</style>
