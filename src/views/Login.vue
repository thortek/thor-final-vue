<template>
    <v-container >
        <v-layout justify-center>
            <v-flex xs6>
                <v-card>
                <v-form @submit.prevent="onSubmit">
                    <div class="input" :class="{invalid: $v.email.$error}">
                   <v-text-field 
                   label="Email"
                    v-model="email"
                    @input="$v.email.$touch()"
                    placeholder="your_email@gmail.com"
                    >
                    </v-text-field> 
                    <p v-if="!$v.email.email">Please provide a valid email address.</p>
                    </div>

                    <v-text-field
                        class="input"
                        label="Password"
                        v-model="password"
                        :type="show1 ? 'text' : 'password'"
                        :class="{invalid: $v.password.$error}"
                        @input="$v.password.$touch()">
                    </v-text-field>
                    <p v-if="!$v.password.required">Please provide a password.</p>
                    <p v-if="!$v.password.$params.minLen">Please provide at least 6 characters.</p>
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
    data () {
        return {
            show1: false,
            password: '',
            email: ''
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLen: minLength(6)
        }
    },
    methods: {
        onSubmit() {
            console.log('Thanks for submitting!')
        }
    }
}
</script>

<style scoped>
.input.invalid div {
    border: 1px solid red;
}
</style>

