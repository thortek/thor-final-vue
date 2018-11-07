<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs3 v-for="ship in starships" :key="ship.model">
      <v-card >
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ship.name}}</h3>
            <div>{{ ship.model}}</div>
            <span>{{ ship.manufacturer }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn :click="followLink(ship.name)" flat color="blue">Search</v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
  </v-layout>
</v-container>
  <!-- <div >
    <h1>This is an about page</h1>
    <ul id="example-1">
      <li v-for="film in allFilms" :key="film.episode_id">
        {{ film.opening_crawl }}
      </li>
</ul>
<div>{{ starships[0]}}</div>
  </div> -->
</template>

<script>
import { films } from '../assets/films'
import { starships } from '../assets/starships'

export default {
  data: function() {
    return {
      allFilms: films,
      starships,
    }
  },
}
</script>

<style>
</style>
