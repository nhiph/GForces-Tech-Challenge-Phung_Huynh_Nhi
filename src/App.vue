<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <Header />
    <router-view />
    <router-link to="/books"></router-link>
    <router-link to="/book/:id"></router-link>
    <Footer />
    <Loading v-if="hasLoading" />
  </div>
</template>

<script>
import Header from "./components/controlled-comp/Header.vue";
import Footer from "./components/controlled-comp/Footer.vue";
import Loading from "./components/controlled-comp/Loading.vue"

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Loading,
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.getMode;
    },
    hasLoading() {
      return this.$store.getters.getLoading;
    }
  },
  mounted() {
    this.$store.dispatch("getBooksApi", "javascript");
  },
};
</script>

<style>
#app {
  font-family: "Zen Maru Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.dark-mode {
  background: #0e0a0abf;
}
</style>
