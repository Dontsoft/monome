<template>
  <div
    :class="{
      'navigation-bar__item-parent': true,
      'navigation-bar__item-parent--opened': toggled,
    }"
  >
    <span
      class="navigation-bar__item__icon navigation-bar__item-parent__chevron"
      @click="toggle"
    >
      <svg
        viewBox="0 0 512 512"
        version="1.1"
        style="
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linejoin: round;
          stroke-miterlimit: 2;
        "
      >
        <path
          d="M294.059,256L167.029,128.971C157.663,119.604 157.663,104.396 167.029,95.029C176.396,85.663 191.604,85.663 200.971,95.029L344.971,239.029C354.343,248.402 354.343,263.598 344.971,272.971L200.971,416.971C191.604,426.337 176.396,426.337 167.029,416.971C157.663,407.604 157.663,392.396 167.029,383.029L294.059,256Z"
        />
      </svg>
    </span>
    <span
      class="navigation-bar__item__icon navigation-bar__item-parent__add-item"
      v-if="!toggled"
    >
      <svg
        viewBox="0 0 512 512"
        version="1.1"
        style="
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linejoin: round;
          stroke-miterlimit: 2;
        "
      >
        <path
          d="M232,232L232,112C232,98.754 242.754,88 256,88C269.246,88 280,98.754 280,112L280,232L400,232C413.246,232 424,242.754 424,256C424,269.246 413.246,280 400,280L280,280L280,400C280,413.246 269.246,424 256,424C242.754,424 232,413.246 232,400L232,280L112,280C98.754,280 88,269.246 88,256C88,242.754 98.754,232 112,232L232,232Z"
        />
      </svg>
    </span>
    <NuxtLink
      :to="localePath({ name: 'project', params: { project: project.id } })"
      class="navigation-bar__item navigation-bar__item--with-icon"
      >{{ project.name }}</NuxtLink
    >
    <div class="navigation-bar__item--nested__container">
      <span
        class="navigation-bar__item navigation-bar__item--with-icon navigation-bar__item--button"
      >
        <div class="navigation-bar__item__icon">
          <svg
            viewBox="0 0 512 512"
            version="1.1"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linejoin: round;
              stroke-miterlimit: 2;
            "
          >
            <path
              d="M232,232L232,112C232,98.754 242.754,88 256,88C269.246,88 280,98.754 280,112L280,232L400,232C413.246,232 424,242.754 424,256C424,269.246 413.246,280 400,280L280,280L280,400C280,413.246 269.246,424 256,424C242.754,424 232,413.246 232,400L232,280L112,280C98.754,280 88,269.246 88,256C88,242.754 98.754,232 112,232L232,232Z"
            />
          </svg>
        </div>
        {{ $t("newPlan") }}
      </span>
      <NuxtLink
        :to="
          localePath({
            name: 'project-plan',
            params: { project: project.id, plan: plan.id },
          })
        "
        class="navigation-bar__item navigation-bar__item--nested"
        v-for="plan in project.plans"
        v-bind:key="plan.id"
      >
        {{ plan.name }}
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import NavigationBarProject from "~/types/NavigationBarProject";

export default Vue.extend({
  props: {
    project: {
      type: Object as PropType<NavigationBarProject>,
      required: true,
    },
  },
  data() {
    return {
      toggled: false,
    };
  },
  methods: {
    toggle(): any {
      this.toggled = !this.toggled;
    },
  },
});
</script>
<style lang="scss">
.navigation-bar__item__icon {
  height: $height-m;
  width: $height-m;
  path {
    fill: rgba($text-inverse, 0.6);
  }
  &:hover {
    cursor: pointer;
    path {
      fill: $text-inverse;
    }
  }
}

.navigation-bar__item-parent {
  position: relative;
  .navigation-bar__item--with-icon {
    padding-left: $padding-l + $padding-s + $height-m;
  }
  .navigation-bar__item-parent__chevron {
    position: absolute;
    top: $padding-s;
    left: $padding-l;
    transform-origin: center;
  }
  .navigation-bar__item-parent__add-item {
    position: absolute;
    top: $padding-s;
    right: $padding-m;
  }
  &.navigation-bar__item-parent--opened {
    .navigation-bar__item-parent__chevron {
      transform: rotate(90deg);
    }
  }
}

.navigation-bar__item--nested__container {
  width: 100%;
  height: 0;
  opacity: 0;
  transition: none;
}
.navigation-bar__item-parent--opened {
  .navigation-bar__item--nested__container {
    opacity: 1;
    height: auto;
  }
}
</style>