<template>
    <div class="popup__container flex flex--column">    
        <div class="popup__positioner">
            <div class="popup__content card card--padded">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    created() {
        document.body.classList.add('popup__visible');
    },
    destroyed() {
        document.body.classList.remove('popup__visible');
    }
})
</script>

<style lang="scss">
body.popup__visible {
    overflow-y: hidden;
}

.popup__container {

    background-color: rgba($background-dark, 0.4);

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10000;
    overflow-y: auto;
    
    justify-content: flex-start;
    align-items: center;

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
}

</style>
