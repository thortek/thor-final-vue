<template>
<v-container grid-list-md text-xs-center>
  <v-btn @click="showing = true" class="animated headShake delay-6s">Show</v-btn>
  <v-row>
    <v-col cols="3" v-for="ship in starships" :key="ship.model">
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
          <v-btn @click="showing = false" color="blue">Hide</v-btn>
        </v-card-actions>
      </v-card>
      </transition>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="3" v-for="ship in upperCaseShips" :key="ship.model">
      <p>{{ ship.name }} {{ ship.capsName }}</p>
    </v-col>
  </v-row>
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

.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards
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
