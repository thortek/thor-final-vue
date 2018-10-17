<template>
  <div >
    <h1>This is an about page</h1>
    <ul id="example-1">
      <li v-for="film in allFilms" :key="film.episode_id">
        {{ film.opening_crawl }}
      </li>
</ul>
<div>{{ starships[0]}}</div>
  </div>
</template>

<script>
import { films } from '../assets/films'
import { starships } from '../assets/starships'

export default {
  data: function() {
    return {
      allFilms: films,
      starships
    }
  }
}
</script>

<style>
</style>


