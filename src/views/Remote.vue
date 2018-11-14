<template>
    <v-container>
    <h1>Remote DB access example</h1>
    <v-btn @click="getCourses">Get Courses</v-btn>
    <div>{{ courses }}</div>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      courses: []
    }
  },
  methods: {
    getCourses() {
      axios.get('https://sweltering-fire-2420.firebaseio.com/courses.json')
        .then(response => { // wow, diff between es5 function and arrow
          console.log(response)
          const allCoursesObj = response.data
          const objectsToArray = Object.entries(allCoursesObj).map(e => Object.assign(e[1], { key: e[0] }))
          console.log(objectsToArray)
          this.courses = [...objectsToArray]
        })
        .catch(error => console.log(error))
        console.log('Done getting all the data!')
    },
  },
}
</script>

<style>
</style>
