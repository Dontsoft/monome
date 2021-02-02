<template>
  <main>
    <navigation-bar></navigation-bar>
    <Nuxt class="content" />
  </main>
</template>

<style lang="scss">

.content {
  padding-bottom: $height-xxl;
  @media screen and (min-width: $xl-display-size) {
    padding-bottom: initial;
    padding-left: $navigation-bar-width;
  }
}

</style>
