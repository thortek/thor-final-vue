<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>Name: {{ userName }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    userName() {
      return this.$store.getters.userName
    }
  }
};
</script>
