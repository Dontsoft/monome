<template>
  <div @click="toggle">
    <div
      :class="{
        'burger-inner': true,
        toggled: toggled,
      }"
    >
      <div class="burger__tile burger__tile--upper"></div>
      <div class="burger__tile burger__tile--middle"></div>
      <div class="burger__tile burger__tile--middle"></div>
      <div class="burger__tile burger__tile--lower"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    toggled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  methods: {
      toggle() : any {
          this.$emit('toggle');
      }
  }
});
</script>

<style lang="scss" scoped>
.burger-inner {
  position: relative;
  height: $height-m;
  width: $height-m;
}

.burger__tile {
  position: absolute;
  background-color: $background-foreground;
  height: 2px;
  border-radius: 1px;

  &.burger__tile--upper {
    top: 2px;
    right: 0;
    width: 75%;
  }

  &.burger__tile--middle {
    top: $height-m / 2 - 1;
    width: 100%;
  }

  &.burger__tile--lower {
    bottom: 2px;
    left: 0;
    width: 75%;
  }
}

.burger-inner.toggled {
    .burger__tile--upper, .burger__tile--lower {
        opacity: 0;
    }
    .burger__tile--middle {
        transform-origin: center;
        width: 120%;
        &:nth-child(odd) {
            transform: rotate(-45deg);
        }
        &:nth-child(even) {
            transform: rotate(45deg);
        }
    }
}

</style>