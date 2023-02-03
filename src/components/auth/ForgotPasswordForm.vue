<template>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-24 w-auto w-24 rounded-full border-cyan-600 border-solid border-1 bg-gray-100" src="/src/assets/images/agcplogotrsp150x150.png"
                 alt="Agapanthus Consulting"/>
            <h1 class="mt-6 text-center text-3xl font-extrabold text-cyan-600">Agapanthus Consulting</h1>
            <h2 class="mt-6 text-center text-2xl font-extrabold text-cyan-500">Forgot your password</h2>
            <p class="mt-4 text-center text-sm text-gray-600">
                Please enter the email address to send the password reset link to
            </p>
            <p class="mt-4 text-center text-sm text-gray-600">
                Or, if you've remembered your password
                {{ ' ' }}
                <router-link class="font-medium text-indigo-600 hover:text-indigo-500"
                             to="/login">sign in to your account
                </router-link>
            </p>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form v-on:submit.prevent="onSubmit" class="space-y-6" novalidate>
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
                              >
                        </BaseInput>
                    </div>
                    <div>
                        <BaseButton
                        title="Send Reset Password Link"
                        :submitting="flgIsSubmitting"
                        :disabled="flgIsSubmitting"
                        />
                    </div>
                    <BaseInformationMessage
                          v-if="informationMessage.title"
                          :title="informationMessage.title"
                          :description="informationMessage.description">
                    </BaseInformationMessage>
                    <BaseErrorMessage
                          v-if="errorMessage.title"
                          :error-title=errorMessage.title
                          :error-description=errorMessage.description>
                    </BaseErrorMessage>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
/*
Vue
 */
import {reactive,ref} from "vue";
/*
Auth services
 */
import useAuthService from "../../services/useAuthService";
import useErrorService from "../../services/useErrorService.js";
/*
Validation
 */
import {useField, useForm} from 'vee-validate'
import {object, string} from 'yup'
/*
Base Components
 */
import BaseInput from "../ui/BaseInput.vue";
import BaseInformationMessage from "../ui/BaseInformationMessage.vue";
import BaseErrorMessage from "../ui/BaseErrorMessage.vue";
import BaseButton from "../ui/BaseButton.vue";

const {logout,sendResetEmail} = useAuthService()
const errorMessage=ref({})
const flgIsSubmitting=ref(false)
const form = reactive({
    email: '',
})
const informationMessage=reactive({})
const {errorMessageHandler}=useErrorService()
/*
Set up the vee-validate validation items
 */
const validationSchema = object({
    email: string().email('Invalid email format').required('An email address is required'),
})
const {handleSubmit,   setErrors, errors,myMessage} = useForm({
    validationSchema
})
const {value: email, handleChange} = useField('email')
/*
On form submission
 */
const onSubmit = handleSubmit(async values => {
    /*
    attempt to send the reset password email
    if successful
        generate a success message for the user
    otherwise
        output the error to the user
     */
    try{
        flgIsSubmitting.value=true
        await logout()
        await sendResetEmail(values)
        informationMessage.title='Success'
        informationMessage.description='We have emailed your password reset link.'
        flgIsSubmitting.value=false
    }catch(e){
        errorMessage.value= await errorMessageHandler(e)
        console.log(errorMessage)
        flgIsSubmitting.value=false
    }
    return {
        onSubmit,
        email,
        handleChange,
        errors,
        informationMessage
    }
})


</script>

<style scoped>

</style>