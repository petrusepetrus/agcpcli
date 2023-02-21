<template>
    <div class="bg-black min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-24 w-auto w-24 rounded-full border-cyan-600 border-solid border-2 bg-gray-100"
                 src="/src/assets/images/agcplogotrsp150x150.png"
                 alt="Agapanthus Consulting"/>
            <h1 class="mt-6 text-center text-3xl font-extrabold text-cyan-600">Agapanthus Consulting</h1>

            <h2 class="mt-6 text-center text-2xl font-extrabold text-cyan-500">Sign in to your account</h2>

            <!--
<p class="mt-2 text-center text-sm text-gray-600">
    Or
    {{ ' ' }}
    <router-link class="font-medium text-indigo-600 hover:text-indigo-500"
                 to="/register">register for an account
    </router-link>
</p>
            -->
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10 border-1 border-gray-100 rounded-sm shadow-md shadow-gray-300/50">
                <form novalidate v-on:submit.prevent="onSubmit" class="space-y-6">
                    <div class="mt-1">
                        <BaseInput
                              type="email"
                              :required="true"
                              placeholder="email address"
                              autocomplete="email"
                              label="Email"
                              name="email"
                              v-model="email"
                              :error="errors.email"
                              :label-class="'block text-md text-gray-300'"
                              :input-class="'block w-full rounded-md  py-2 px-4  font-medium text-gray-500'"
                        >
                        </BaseInput>
                    </div>
                    <div class="mt-1">
                        <BaseInput
                              type="password"
                              :required="true"
                              placeholder="password"
                              autocomplete="password"
                              label="Password"
                              name="password"
                              v-model="password"
                              :error="errors.password"
                              :label-class="'block text-md text-gray-300'"
                              :input-class="'block w-full rounded-md  py-2 px-4  font-medium text-gray-500'"
                        >
                        </BaseInput>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                   class="h-4 w-4 text-gray-300 focus:ring-teal-500 border-gray-300 rounded"/>
                            <label for="remember-me" class="ml-2 block text-sm text-gray-400"> Remember me </label>
                        </div>

                        <div class="text-sm">
                            <router-link class="font-medium text-teal-500 hover:text-teal-300"
                                         to="/forgot-password">Forgot your password
                            </router-link>
                        </div>
                    </div>

                    <div>
                        <BaseButton
                              title="Sign In"
                              :submitting="flgIsSubmitting"
                              :disabled="flgIsSubmitting"
                        />
                    </div>
                    <BaseErrorMessage
                          v-if="errorMessage.title"
                          :error-description=errorMessage.description
                          :error-title=errorMessage.title>
                    </BaseErrorMessage>

                </form>
            </div>
        </div>
    </div>

</template>
<script setup>
/*
Overview
Provides login facilities for end user
and initialise authorisation details for user in the authStore
*/

/* -----------------------------------------------------------------
Imports
------------------------------------------------------------------*/

/* Vue */
import {ref} from "vue";

/* Services and Utilities */
import useAuthService from "../../services/useAuthService.js";
import useErrorService from "../../services/useErrorService.js";
import {hasRole} from "../../utils/RolesAndPermissions.js";

/* Stores */
import {useAuthStore} from "../../stores/AuthStore";

/* Validation */
import {useField, useForm} from 'vee-validate'
import {object, string} from 'yup'

/* Router */
import {useRouter} from "vue-router";

/* Base Components */
import BaseErrorMessage from "../ui/BaseErrorMessage.vue";
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";

/* -----------------------------------------------------------------
Initialisation and Set Up
------------------------------------------------------------------*/
const router = useRouter()
const authStore = useAuthStore()
const {login} = useAuthService()
const {errorMessageHandler} = useErrorService()
const errorMessage = ref({})
/*
Set up the vee-validate validation items
*/
const validationSchema = object({
    password: string().required('Please enter your password'),
    email: string().email('Invalid email format').required('An email address is required'),
})
const {handleSubmit, flgIsSubmitting, errors} = useForm({
    validationSchema
})
const {value: email, handleChange} = useField('email')
const {value: password} = useField('password')

/* -----------------------------------------------------------------
Functions
------------------------------------------------------------------*/
const onSubmit = handleSubmit(async values => {
    /*
    attempt to login
    if successful
    the login process will have retrieved the user information from the back end
    and put this into the authStore. We then check to see if the user is authenticated and
    verified before we direct them to the dashboard If they are not already verified we route them
    to the verify email page
    otherwise
    output the error to the user
    */
    try {
        await login(values)
//console.log("logged in")
        if (authStore.isAuthenticated && authStore.isVerified) {
            if (hasRole(['super admin', 'admin'])) {
                router.push({name: "home"})
            } else {
                //console.log("heading to user-dashboard")
                router.push({name: "user-dashboard"})
            }
        } else if (!authStore.isVerified) {
            router.push({name: 'verify-email'})
        }
    } catch (e) {
        errorMessage.value = await errorMessageHandler(e)
//console.log(errorMessage.value.title)
    }
    return {
        onSubmit,
        email,
        password,
        handleChange,
        errors
    }
})
</script>

<style scoped>

</style>