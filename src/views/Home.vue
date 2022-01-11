<template>
  <div>
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import AboutMe from './aboutme/aboueMe.vue'
import Skills from './skills/skills.vue'
import Projects from './projects/projects.vue'
import Contact from './contact/contact.vue'

export default {
  name: "Home",
  components: {
    AboutMe,
    Skills,
    Projects,
    Contact
  }
};
</script>