<template>
  <popup-container @close="cancel" :header="$t('newProject')">
    <div class="flex flex--button-row">
      <span class="button" @click="cancel">{{ $t('cancel')}}</span>
      <span class="button button--success" :class="{
        'button--disabled': !finished
      }">{{ $t('Save') }}</span>
    </div>
  </popup-container>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() : any {
      return {
        finished: false
      }
    },
    methods: {
      cancel() : any {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
      }
    }
})
</script>

<style lang="scss" scoped>

</style>