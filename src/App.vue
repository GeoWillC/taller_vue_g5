<template>
  
  <router-view />
  <!-- <PaginaRegistro /> -->
</template>

<script>
import PaginaPrincipal from "./page/PaginaPrincipal.vue";
import PaginaRegistro from "./page/PaginaRegistro.vue";

export default {
  name: "App",
  components: {
    PaginaPrincipal,
    PaginaRegistro,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
