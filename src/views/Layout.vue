<template>
    <v-app>
  <v-navigation-drawer app clipped v-model="drawer">Nav</v-navigation-drawer>
  <v-toolbar app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  </v-toolbar>
  <v-content>
<v-container fluid>
<div v-box-shadow:offset.blur="3">My content goes here</div>
    </v-container>
  </v-content>
  <v-footer app>Footer</v-footer>
</v-app>
</template>

<script>
 export default {
    data () {
      return {
        drawer: null,
      }
    }
  }
</script>

<style scoped>
</style>

