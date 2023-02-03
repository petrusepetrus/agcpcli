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

                        <BaseCheckbox
                              v-model="terms_and_conditions"
                              name="terms_and_conditions"
                              :required="true"
                              label="I have read and agree to the data usage  terms"
                              label-description=""
                              :model-value="terms_and_conditions"
                              :error="errors.terms_and_conditions"
                              :labelClass="'text-md text-gray-300'"
                              :labelDescriptionClass="'text-gray-400'"
                              :inputClass="'focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded'"
                        >
                        </BaseCheckbox>
                    </div>

            </fieldset>
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
import BaseSpinner from "../../ui/BaseSpinner.vue";
import BaseErrorMessage from "../../ui/BaseErrorMessage.vue";
import BaseButton from "../../ui/BaseButton.vue";
/* Validation */
import {useField, useForm} from 'vee-validate'
import {boolean} from 'yup'
/* Services */
import useUserService from "../../../services/user/useUserService.js";
import useErrorService from "../../../services/useErrorService.js";
import {object, string} from "yup";
/*
-------------------------------------------------------------------------------
Props
------------------------------------------------------------------------------- */

/*
-------------------------------------------------------------------------------
Variable definitions
------------------------------------------------------------------------------ */
const route = useRoute();

const mailing_list=ref(null)

let formValues={}
//const errorMessage=ref('')
const validationSchema = object({
    terms_and_conditions: boolean().required('Please read and accept our data usage terms'),
})
const {validate,errors, setFieldError} = useForm({
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
terms_and_conditions.value=false
/*
-------------------------------------------------------------------------------
Variable Declaration and Initialisation
------------------------------------------------------------------------------- */

/*
-------------------------------------------------------------------------------
Functions
------------------------------------------------------------------------------- */
async function validateForm() {

    let {valid}=await validate()

    if(terms_and_conditions.value!==true){
        setFieldError('terms_and_conditions','Please review and accept our data usage terms.')
        valid=false
    }
    if(valid){
        formValues.mailing_list=mailing_list.value
        formValues.terms_and_conditions=terms_and_conditions.value
    }
    return {
        valid,
        formValues
    }
}



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