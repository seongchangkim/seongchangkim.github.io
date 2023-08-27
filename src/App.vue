<template>
  <div id="app">
    <div class="top">
      <div
        class="top-nav d-flex justify-content-between position-fixed top-0 w-100 bg-white fw-semibold ms-2"
      >
        <div
          class="logo pl-2 pt-3 pr-0 pb-0 text-decoration-none align-middle text-dark"
          @click="onRefreshPage"
        >
          KSC's portfolio
        </div>

        <div class="sub-nav d-flex justify-content-between me-3">
          <div
            @click="moveComponent('aboutme')"
            class="sub-nav-div mx-3 mt-3 mb-0 fw-semibold"
          >
            About me
          </div>
          <div
            @click="moveComponent('skills')"
            class="sub-nav-div mx-3 mt-3 mb-0 fw-semibold"
          >
            Skill Stack
          </div>
          <div
            @click="moveComponent('projects')"
            class="sub-nav-div mx-3 mt-3 mb-0 fw-semibold"
          >
            Projects
          </div>
          <div
            @click="moveComponent('contact')"
            class="sub-nav-div mx-3 mt-3 mb-0 fw-semibold"
          >
            Contact
          </div>
        </div>
      </div>

      <Introduction />
    </div>
    <router-view />
  </div>
</template>

<script>
import Introduction from "@/views/introduction/introduction.vue";

export default {
  name: "App",
  methods: {
    moveComponent(element) {
      document.getElementById(element).scrollIntoView();
    },
    onRefreshPage() {
      window.location.reload();
    },
  },
  components: {
    Introduction,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  contain: style layout inline-size;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.top {
  background: url("./assets/img/programming.jpg");
  height: 420px;
}

.top-nav {
  z-index: 101;
}

.logo a {
  color: #d5a6bd;
  cursor: default;
}

.sub-nav {
  height: 2em;
}

.logo,
.sub-nav > div {
  cursor: default;
}
</style>
