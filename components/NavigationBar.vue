<template>
  <div
    class="navigation-bar bg--dark"
    unselectable="on"
    onselectstart="return false;"
    onmousedown="return false;"
  >
    <div class="mobile-menu">
      <div class="flex__spacer"></div>
      <burger class="burger" :toggled="toggled" @toggle="toggleMenu" />
    </div>
    <div class="navigation-bar__content-container">
      <monome-textonly-white class="logo" />
      <div class="navigation-bar__content bg--dark">
        <nav class="navigation-bar__content__nav">
          <NuxtLink
            class="navigation-bar__item"
            :to="localePath({ name: 'index' })"
            >{{ $t("dashboard") }}</NuxtLink
          >
          <span
            class="navigation-bar__item navigation-bar__item--with-icon navigation-bar__item--button"
            @click="newProject"
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
            {{ $t("newProject") }}
          </span>
          <navigation-bar-project-item
            v-for="project in projects"
            v-bind:key="project.id"
            :project="project"
          />
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBarProject from "~/types/NavigationBarProject";
import NewProjectPopup from './NewProjectPopup.vue';


export default Vue.extend({
  methods: {
    newProject() : any {
      const PopupConstructor = Vue.extend(NewProjectPopup);
      const instance = new PopupConstructor();
      const _mountElement = document.createElement("div");
      _mountElement.setAttribute("id", "popup__mount");
      document.body.appendChild(_mountElement);
      instance.$mount("#popup__mount");
    },
    toggleMenu(): any {
      this.toggled = !this.toggled;
      if (this.toggled) {
        document.body.classList.add("menu-visible");
      } else {
        document.body.classList.remove("menu-visible");
      }
    },
  },
  data() {
    return {
      toggled: false,
      projects: [] as Array<NavigationBarProject>,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.toggled = false;
      document.body.classList.remove("menu-visible");
      next();
    });
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      let plans = [];
      for (let j = 0; j < 10; j++) {
        plans.push({
          id: `${j}`,
          name: `Plan ${j}`,
        });
      }
      let project = {
        id: `${i}`,
        name: `Project ${i}`,
        plans: plans,
      };
      this.projects.push(project);
    }
  },
});
</script>

<style lang="scss">
$content-size: $height-xxl - 2 * $padding-m;
.navigation-bar__content-container {
  position: relative;
  width: 100%;
  .logo {
    position: fixed;
    height: $content-size;
    left: $padding-m;
    bottom: $padding-m;
    transition: bottom 0.2s linear;
  }
  @media screen and (min-width: $xl-display-size) {
    position: initial;
    padding: $padding-m 0;
    height: 100%;
    .logo {
      position: initial;
      margin-left: $padding-m;
      margin-bottom: $padding-l;
    }
  }
  .navigation-bar__content {
    position: absolute;

    padding-top: $padding-xl;
    padding-bottom: $padding-xl;

    bottom: -100vh;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;

    transition: bottom 0.2s linear;
    .navigation-bar__content__nav {
      overflow-y: auto;
      height: 100%;
      $max-height-difference: $content-size + $padding-m + $padding-l +
        $padding-xl;
      // max-height: calc(100vh - #{$max-height-difference});
    }

    @media screen and (min-width: $xl-display-size) {
      @include default-transition;
      position: initial;
      padding-top: initial;
      padding-bottom: initial;
      height: 100%;
      $max-height-difference: $content-size + 2 * $padding-m + $padding-l;
      //max-height: calc(100vh - #{$max-height-difference});
      .navigation-bar__content__nav {
        height: 100%;
        max-height: initial;
      }
    }
  }
}

body.menu-visible {
  overflow-y: hidden;
  .navigation-bar__content-container {
    .logo {
      bottom: calc(100vh - #{$content-size} - #{$padding-m});
    }
    .navigation-bar__content {
      bottom: 0;
    }
  }
  @media screen and (min-width: $xl-display-size) {
    overflow-y: auto;
  }
}

.navigation-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  height: $height-xxl;
  width: 100vw;
  z-index: 1000;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
  @media screen and (min-width: $xl-display-size) {
    height: 100vh;
    width: $navigation-bar-width;
  }
}

.mobile-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 100%;
  padding: $padding-m;

  @media screen and (min-width: $xl-display-size) {
    display: none;
  }

  .burger {
    height: $content-size;
    width: $content-size;
  }
}

.navigation-bar__item {
  display: inline-block;
  padding: $padding-s $padding-l;
  line-height: $height-m;
  text-decoration: none;
  color: $text-inverse;
  width: 100%;
  max-width: 100%;

  white-space: nowrap;
  text-overflow: ellipsis;

  &:visited {
    text-decoration: none;
    color: $text-inverse;
  }

  &.navigation-bar__item--with-icon {
    // padding-left: $padding-l + $padding-s + $height-m;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .navigation-bar__item__icon {
      height: $height-m;
      width: $height-m;
      margin-right: $padding-s;
      svg {
        height: 100%;
        width: 100%;
        path {
          fill: $text-inverse;
        }
      }
    }
  }

  &.navigation-bar__item--nested {
    padding-left: $padding-l + $padding-s + $height-m;
    font-size: 0.9rem;
  }

  &.navigation-bar__item--exact-active,
  &:hover {
    background-color: rgba($primary, 0.4);
    cursor: pointer;
  }

  &.navigation-bar__item--button {
    color: rgba($text-inverse, 0.6);
    .navigation-bar__item__icon {
      svg path {
        fill: rgba($text-inverse, 0.6);
      }
    }
    &:hover {
      background-color: transparent;
      color: $text-inverse;
      cursor: pointer;
      .navigation-bar__item__icon {
        svg path {
          fill: $text-inverse;
        }
      }
    }
  }
}
</style>