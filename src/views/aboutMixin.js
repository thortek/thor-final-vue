import { films } from '../assets/films'
import { starships } from '../assets/starships'

export const aboutMixin = {
    data() {
    return {
      allFilms: films,
      starships,
    }
  },
  filters: {
    allCaps(value) {
      return value.toUpperCase()
    }
  },
  computed: {
    upperCaseShips() {
      return this.starships.map((ship) => {
        return { ...ship, capsName : ship.name.toUpperCase() }
      })
    }
  }
}