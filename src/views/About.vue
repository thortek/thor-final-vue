<template>
<v-container grid-list-md text-xs-center>
  <v-btn @click="showing = true" class="animated infinite headShake delay-2s">Flip</v-btn>
  <v-layout row wrap>
    <v-flex xs3 v-for="ship in starships" :key="ship.model">
      <transition name="flip" mode="out-in">
      <v-card v-if="showing">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ship.name | allCaps}}</h3>
            <div>{{ ship.model }}</div>
            <span>{{ ship.manufacturer }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn @click="showing = false" color="blue">Search</v-btn>
        </v-card-actions>
      </v-card>
      </transition>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>

import { aboutMixin } from './aboutMixin.js'

export default {
  data() {
    return {
      showing: true
    }
  },
  mixins: [aboutMixin],

}
</script>

<style>
.flip-enter {

}
.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards
}
.flip-leave {

}
.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg)
  }
  to {
    transform: rotateY(0deg)
  }
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg)
  }
  to {
    transform: rotateY(90deg)
  }
}
</style>
