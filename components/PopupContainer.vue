<template>
  <div class="popup__container flex flex--column">
    <div class="popup__background" @click="close"></div>
    <div class="popup__positioner">
      <div class="popup__content card card--padded">
        <div class="popup__header">
          <div class="popup__header__text">
            {{ header }}
          </div>
          <div class="popup__close-button" @click="close">
            <svg viewBox="0 0 512 512">
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </div>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  methods: {
    close(): any {
      this.$emit("close");
    },
    keyup(event : KeyboardEvent) : any {
      if (event.key == "Escape") {
        this.$emit('close');
      }
    }
  },
  created() {
    document.body.classList.add("popup__visible");
    document.addEventListener('keyup', this.keyup);
  },
  destroyed() {
    document.body.classList.remove("popup__visible");
    document.removeEventListener('keyup', this.keyup);
  },
});
</script>

<style lang="scss">
body.popup__visible {
  overflow-y: hidden;
}

.popup__container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10000;
  overflow-y: auto;

  justify-content: flex-start;
  align-items: center;

  .popup__background {
    background-color: rgba($background-dark, 0.4);

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }

  .popup__positioner {
    padding: $padding-xl;
  }

  .popup__content {
    @each $size in $display-sizes {
      @media screen and (min-width: $size) {
        max-width: $size - 2 * $padding-xl;
      }
    }
  }

  .popup__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid rgba($text, 0.1);

    padding-bottom: $padding-m;
    margin-bottom: $padding-m;

    .popup__header__text {
      color: $text;
      font-size: 1.6rem;
      padding-right: $padding-l;
    }
  }
  .popup__close-button {
    height: $height-xl;
    width: $height-xl;
    svg {
      height: 100%;
      path {
        stroke: rgba($text, 0.3);
      }
    }
    &:hover {
      cursor: pointer;
      svg {
        path {
          stroke: rgba($text, 0.6);
        }
      }
    }
  }
}
</style>
