<template>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-24 w-auto w-24 rounded-full border-cyan-600 border-solid border-1 bg-gray-100" src="/src/assets/images/agcplogotrsp150x150.png"
                 alt="Agapanthus Consulting"/>
            <h1 class="mt-6 text-center text-3xl font-extrabold text-cyan-600">Agapanthus Consulting</h1>
            <h2 class="mt-6 text-center text-2xl font-extrabold text-cyan-500">Verify your account</h2>
            <div class="mt-2 text-center text-sm text-gray-600">
                <p class="m-4">Please use the link in the Verification Email sent to your registered email address in order to gain full access to your account.</p>
                <p class="m-4">If you cannot find your Verification Email please request another one by clicking on the button below.</p>
            </div>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form novalidate v-on:submit.prevent="onSubmit" class="space-y-6">
                    <div>
                        <BaseButton
                              title="Request A New Verification Email"
                              :submitting="flgIsSubmitting"
                              :disabled="flgIsSubmitting"
                        />
                    </div>
                    <BaseErrorMessage
                          v-if="errorMessage.title"
                          :error-description=errorMessage.description
                          :error-title=errorMessage.title>
                    </BaseErrorMessage>
                    <BaseInformationMessage
                          v-if="verifyMessage"
                          :title="verifyMessage.title"
                          :description="verifyMessage.description"
                    >
                    </BaseInformationMessage>

                </form>
            </div>
        </div>
    </div>


</template>

<script setup>
import {ref,reactive} from 'vue'
import useAuthService from "../../services/useAuthService"
import useErrorService from "../../services/useErrorService.js";
import {useAuthStore} from "../../stores/AuthStore";

const {user} = useAuthStore()
import BaseErrorMessage from "../ui/BaseErrorMessage.vue";
import BaseInformationMessage from "../ui/BaseInformationMessage.vue";
import BaseButton from "../ui/BaseButton.vue";

const {errorMessageHandler}=useErrorService()
const verifyMessage = reactive({})
const flgIsSubmitting=ref(false)
const errorMessage=reactive({})

const {sendVerificationEmail} = useAuthService()
const onSubmit = async () => {
    try {
        flgIsSubmitting.value=true
        await sendVerificationEmail(user.id)
        verifyMessage.title = 'Success'
        verifyMessage.description = 'We have sent a verification email to your email address. Once verified, you will be able to sign into your account.'

        flgIsSubmitting.value=false
    } catch (e) {
        errorMessage.value = await errorMessageHandler(e)
        flgIsSubmitting.value=false
    }
}

</script>

<style scoped>

</style>