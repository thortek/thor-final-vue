<template>
    <v-container >
        <v-layout justify-center>
            <v-flex xs6>
                <v-card>
                <v-form @submit.prevent="onSubmit">
                    <div class="input" :class="{invalid: $v.email.$error}">
                   <v-text-field 
                   label="Email"
                    v-model.lazy="email"
                    @blur="$v.email.$touch()"
                    placeholder="your_email@gmail.com"
                    >
                    </v-text-field> 
                    <p v-if="!$v.email.email">Please provide a valid email address.</p>
                    </div>

                    <v-text-field
                        label="Error"
                        v-model="password"
                        :type="show1 ? 'text' : 'password'"
                        :rules="[rules.required, rules.min]"
                        validate-on-blur
                        error
                        value="Pa"
                       >
                    </v-text-field>
                </v-form>
                </v-card>
            </v-flex>
            <div>
                <p>{{ email }}</p>
                <p>{{ password }}</p>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      show1: false,
      password: '',
      email: '',
        rules: {
        required: value => !!value || 'Password is Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
    },
    }
  },
  validations: {
    email: {
      required,
      email
    },
  },
  methods: {
    onSubmit() {
      console.log('Thanks for submitting!')
    }
  }
}
}
</script>

<style scoped>
.input.invalid div {
  border: 1px solid red;
}
</style>
