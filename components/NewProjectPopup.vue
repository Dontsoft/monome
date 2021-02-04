<template>
  <popup-container @close="cancel" :header="$t('newProject')">
    <div class="form-container">
      <div class="input">
        <label for="name-input" class="input__label">{{ $t("name") }}</label>
        <input
          type="text"
          name="name"
          id="name-input"
          class="input__text"
          v-model="name"
          autocomplete="off"
        />
      </div>
      <div class="input">
        <label for="description-input" class="input__label">{{
          $t("description")
        }}</label>
        <textarea
          name="description"
          id="description-input"
          cols="30"
          rows="10"
          class="input__text input__text--non-resizable"
          v-model="description"
          autocomplete="off"
        ></textarea>
      </div>
      <div class="flex flex--button-row">
        <span class="button" @click="cancel">{{ $t("cancel") }}</span>
        <span
          class="button button--success"
          :class="{
            'button--disabled': !finished,
          }"
          >{{ $t("Save") }}</span
        >
      </div>
    </div>
  </popup-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data(): any {
    return {
      description: "",
      name: "",
    };
  },
  computed: {
    finished(): Boolean {
      return this.name.length > 0;
    },
  },
  methods: {
    cancel(): any {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
  },
});
</script>

<style lang="scss" scoped>
.form-container {
  width: $xs-content-size;

  @media screen and (min-width: $s-display-size) {
    width: $s-content-size;
  }

  @media screen and (min-width: $m-display-size) {
    width: $m-content-size;
  }
}
</style>