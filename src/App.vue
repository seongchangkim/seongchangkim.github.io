<template>
  <div id="app">
    <div class="top">
      <div class="top-nav">
        <div class="logo">
          <router-link to="/">KSC's portfolio</router-link>
        </div>

        <div class="sub-nav">
          <div @click="moveComponent('aboutme')" class="sub-nav-div">About me</div>
          <div @click="moveComponent('skills')" class="sub-nav-div">Skills</div>
          <div @click="moveComponent('projects')" class="sub-nav-div">Projects</div>
          <div @click="moveComponent('contact')" class="sub-nav-div">Contact</div>
        </div>
      </div>

      <Introduction />
    </div>
    <router-view />
  </div>
</template>

<script>
import Introduction from "./views/introduction/introduction.vue"; 

export default {
  name: "App",
  methods: {
    moveComponent(element) {
      console.log(document.getElementById(element));
      document.getElementById(element).scrollIntoView();
    },
  },
  components: {
    Introduction,
  }
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
  text-align: center;
  color: #2c3e50;
}

.top {
  background: url("./assets/img/programming.jpg");
  height: 420px;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 101;
  width: 100%;
  background: #ffffff;
}

.logo {
  padding-top: 10px;
  padding-left: 10px;
}

.logo a {
  text-decoration: none;
  color: #d5a6bd;
  vertical-align: center;
  cursor: default;
}

.sub-nav {
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.sub-nav > div {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  color: #d5a6bd;
  cursor: default;
}

@media (max-width: 500px) {
  .logo a {
    font-size: 10px;
  }
  
  .sub-nav-div {
    font-size: 10px;
    padding-top: 5px;
  }
}
</style>
