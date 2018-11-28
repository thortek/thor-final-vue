<template>
  <v-container grid-list-md text-xs-center>
    <h1>Remote DB access example</h1>
    <v-btn @click="getCourses">Get Courses</v-btn>
    <v-expansion-panel focusable>
      <v-expansion-panel-content v-for="course in courses" :key="course.key">
        <div class="main" slot="header">{{course.prefix}} {{course.number}} {{course.title}}</div>
        <v-card>
          <v-card-text class="grey lighten-3">
            <h4>Offered: {{ course.termsOffered}}</h4>
            <h5>Credits: {{ course.lectureCredits}} {{course.prereq}}</h5>
            <br>
            <p>{{ course.description }}</p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      courses: [],
    }
  },
  methods: {
    getCourses() {
      return axios
        .get('https://sweltering-fire-2420.firebaseio.com/courses.json')
        .then(response => {
          // wow, diff between es5 function and arrow
          console.log(response)
          const allCoursesObj = response.data
          const objectsToArray = Object.entries(allCoursesObj).map(e =>
            Object.assign(e[1], { key: e[0] }),
          )
          console.log(objectsToArray)
          this.courses = [...objectsToArray]
        })
        .catch(error => console.log(error))
      console.log('Done getting all the data!')
    },
  },
}
</script>

<style scoped>
.main {
  font-size: 1.25em;
  font-weight: 600;
  color: rgb(9, 63, 7);
}
</style>
