<template>
    <form
          novalidate class="bg-black col-span-2"
          @submit.prevent="onSubmit">
        <div class="mt-0">
            <fieldset>
                <div class="mt-4 space-y-4">

                    <BaseCheckbox
                          v-model="mailing_list "
                          name="mailing_list"
                          label="Mailing List"
                          label-description="Keep up to date with news from me."
                          :model-value="mailing_list"
                          :labelClass="'text-md text-gray-300'"
                          :labelDescriptionClass="'text-gray-400'"
                          :inputClass="'focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded'"
                    >
                    </BaseCheckbox>
                    <div class="text-sm text-gray-300 flex float-left whitespace-nowrap">
                        <BaseCheckbox
                              v-model="terms_and_conditions"
                              name="terms_and_conditions"
                              :required="true"
                              label=""
                              label-description=""
                              :model-value="terms_and_conditions"
                              :error="errors.terms_and_conditions"
                              :labelClass="'text-md text-gray-300'"
                              :labelDescriptionClass="'text-gray-400'"
                              :inputClass="'float-left focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded'"
                        />
                        &nbspI have read and agree to the
                        <router-link
                              to="/data-usage-policy"
                              class="text-left border-teal-500 text-teal-500 border-b-2 hover:text-teal-200"
                        >
                            &nbspdata usage policy
                        </router-link>

                    </div>
                </div>

            </fieldset>
            <div class="text-sm text-gray-300 mt-4">
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy"
                   target="_blank"
                   class="text-left border-teal-500 text-teal-500 border-b-2 hover:text-teal-200"
                >Privacy Policy
                </a>
                and
                <a href="https://policies.google.com/terms"
                   target="_blank"
                   class="text-left border-teal-500 text-teal-500 border-b-2 hover:text-teal-200"
                >Terms of Service
                </a> apply.
            </div>
        </div>
    </form>
</template>

<script setup>
/*
-------------------------------------------------------------------------------
Overview
-------------------------------------------------------------------------------
The UserType information component manages
- the presentation of the user's UserType details
- the addition of new UserTypes for a user
- changing or deleting a user's UserType details
----------------------------------------------------------------------------*/
/*
-------------------------------------------------------------------------------
Imports
-----------------------------------------------------------------------------*/
/* Vue  */
import {ref, reactive} from 'vue'
/* Vue Router */
import {useRoute} from "vue-router";
/* Components  */
import BaseCheckbox from "../../ui/BaseCheckbox.vue";
/* Validation */
import {useField, useForm} from 'vee-validate'
import {boolean} from 'yup'
/* Services */
import {object, string} from "yup";
import { useReCaptcha } from "vue-recaptcha-v3";
/*
-------------------------------------------------------------------------------
Props
------------------------------------------------------------------------------- */

/*
-------------------------------------------------------------------------------
Variable definitions
------------------------------------------------------------------------------ */
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
const route = useRoute();

const mailing_list = ref(null)

let formValues = {}
//const errorMessage=ref('')
const validationSchema = object({
    terms_and_conditions: boolean().required('Please read and accept our data usage terms'),
})
const {validate, errors, setFieldError} = useForm({
    validationSchema
})
let {value: terms_and_conditions} = useField('terms_and_conditions')

/*
-------------------------------------------------------------------------------
Initialisation
-------------------------------------------------------------------------------*/
/*
explicitly expose the vaildateForm function so that it can be called by the parent component
 */
defineExpose({
    validateForm,
})
terms_and_conditions.value = false
/*
-------------------------------------------------------------------------------
Variable Declaration and Initialisation
------------------------------------------------------------------------------- */

/*
-------------------------------------------------------------------------------
Functions
------------------------------------------------------------------------------- */
async function validateForm() {
    await recaptcha()
    let {valid} = await validate()

    if (terms_and_conditions.value !== true) {
        setFieldError('terms_and_conditions', 'Please review and accept our data usage terms.')
        valid = false
    }
    if (valid) {
        formValues.mailing_list = mailing_list.value
        formValues.terms_and_conditions = terms_and_conditions.value
    }
    return {
        valid,
        formValues
    }
}
const recaptcha = async () => {
    try {
        // (optional) Wait until recaptcha has been loaded.
        await recaptchaLoaded();

        // Execute reCAPTCHA with action "login".
        const token = await executeRecaptcha("login");

        // Do stuff with the received token.
        //console.log({ token });
    }catch(e){

    }
};

/*
-------------------------------------------------------------------------------
Emits
------------------------------------------------------------------------------- */

/*
-------------------------------------------------------------------------------
Lifecycle Hooks
---------------------------------------------------------------------------------*/


</script>

<style scoped>

</style>