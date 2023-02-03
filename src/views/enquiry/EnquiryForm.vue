<template>
    <div>
        <Navbar2></Navbar2>
        <div class="min-h-screen bg-black py-4 ">
            <div class="bg-black mx-auto max-w-4xl">
                <header class="grid relative bg-black">
                    <div class="static inset-0">
                        <img
                              class="w-full object-cover "
                              src="src/assets/images/websitedesign.jpg"
                              alt=""/>
                        <div
                              class="absolute inset-0 "
                              aria-hidden="true"/>
                    </div>
                </header>
                <main>
                    <div v-if="flgSubmissionSuccessful"
                         class=" mx-auto max-w-4xl px-4 py-10 sm:col-span-1 md:col-span-2 lg:col-span-3 ">
                        <EnquiryConfirmation></EnquiryConfirmation>
                    </div>
                    <!-- Side-by-side grid -->
                    <div v-else class=" mx-auto max-w-4xl px-4 py-10 sm:col-span-1 md:col-span-2 lg:col-span-3 ">
                        <h2 class="text-teal-600 text-3xl  tracking-tight sm:text-4xl sm:tracking-tight">
                            Contact Me
                        </h2>
                        <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                            You can contact me by phone or email.
                        </p>
                        <div class="mx-auto max-w-7xl">
                            <div class="flex mt-12">
                                <PhoneIcon class="block h-6 w-6 text-teal-500"></PhoneIcon>
                                <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl ml-6 ">Call
                                    <span class="text-base text-cyan-600 lg:text-lg xl:text-xl">Peter </span>on
                                    <span class="text-base text-cyan-600 lg:text-lg xl:text-xl">07557 199365</span>. If
                                    I'm not available,
                                    please leave a message and contact number and I'll return your call you as soon as I
                                    am able.
                                </p>
                            </div>
                        </div>
                        <div class="mx-auto max-w-7xl">
                            <div class="flex mt-12">
                                <EnvelopeIcon class="block h-6 w-6 text-teal-500"></EnvelopeIcon>
                                <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl ml-6 ">Mail me using
                                    the form below, selecting the enquiry type
                                    that most closely matches what you would like to talk about. I will respond as soon
                                    as I am able.
                                </p>
                            </div>
                        </div>
                        <div
                              v-if="!flgSubmissionSuccessful"
                              class="p-6 mt-8 border-1 border-gray-100 rounded-sm shadow-md shadow-gray-300/50"
                        >
                            <EnquiryHeader
                                  ref="enquiryHeader"
                                  :title="'Your Details'"
                                  @change-enquiry-type="changeEnquiryType"
                            ></EnquiryHeader>
                        </div>
                        <div
                              v-if="enquiryType==='New Website' & !flgSubmissionSuccessful"
                              class="p-6 mt-2 border-1 border-gray-100 rounded-sm shadow-md shadow-gray-300/50">
                            <EnquiryNewWebsiteCard
                                  ref="enquiryNewWebsiteCard">
                            </EnquiryNewWebsiteCard>
                        </div>
                        <div v-if="enquiryType==='Redesign of Existing Website' & !flgSubmissionSuccessful"
                             class="p-6 mt-2 border-1 border-gray-100 rounded-sm shadow-md shadow-gray-300/50">
                            <EnquiryWebsiteRedesignCard
                                  ref="enquiryWebsiteRedesignCard">
                            </EnquiryWebsiteRedesignCard>
                        </div>
                        <div
                              v-if="enquiryType==='Website Maintenance' & !flgSubmissionSuccessful"
                              class="p-6 mt-2 border-1 border-gray-100 rounded-sm shadow-md shadow-gray-300/50">
                            <EnquiryWebsiteMaintenanceCard
                                  ref="enquiryWebsiteMaintenanceCard">
                            </EnquiryWebsiteMaintenanceCard>
                        </div>
                        <div
                              v-if="enquiryType==='Search Engine Optimisation and Ranking' & !flgSubmissionSuccessful"
                              class="p-6 mt-2 border-1 border-gray-100 rounded-sm shadow-md shadow-gray-300/50">
                            <EnquirySEOCard
                                  ref="enquirySEOCard">
                            </EnquirySEOCard>
                        </div>
                        <div
                              v-if="enquiryType==='Something Else' & !flgSubmissionSuccessful"
                              class="p-6 mt-2 border-1 border-gray-100 rounded-sm shadow-md shadow-gray-300/50">
                            <EnquirySomethingElseCard
                                  ref="enquirySomethingElseCard">
                            </EnquirySomethingElseCard>
                        </div>
                        <div
                              v-if="enquirySelected & !flgSubmissionSuccessful"
                              class="p-6 mt-2 border-1 border-gray-100 rounded-sm shadow-md shadow-gray-300/50">
                            <EnquiryFooter
                                  ref="enquiryFooter">
                            </EnquiryFooter>
                        </div>
                        <div
                              v-if="enquirySelected & !flgSubmissionSuccessful"
                              class="mt-6 lg:w-32  lg:justify-items-end md:justify-end sm:col-span-2">
                            <BaseButton
                                  title="Submit"
                                  :submitting="flgIsSubmitting"
                                  :disabled="flgIsSubmitting"
                                  @click="onSubmit($event)">
                            </BaseButton>
                        </div>
                        <div class="mt-6 col-span-2 ">
                            <BaseErrorMessage
                                  v-if="errorMessage.title"
                                  :error-description=errorMessage.description
                                  :error-title=errorMessage.title>
                            </BaseErrorMessage>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>
<script setup>
/* Overview
-------------------------------------------------------------------------------
Enquiry form controller for determining which components
of the various enquiry options to display, based on the user's enquiry type
selection.
-------------------------------------------------------------------------------*/
/*===============================================================================*/
/* Imports
/*===============================================================================*/
/*-------------------------------------------------------------------------------*/
/* Vue
/*-------------------------------------------------------------------------------*/
import {ref} from 'vue'
/*-------------------------------------------------------------------------------*/
/* Router
/*-------------------------------------------------------------------------------*/
import {useRouter} from "vue-router";
/*-------------------------------------------------------------------------------*/
/* Components
/*-------------------------------------------------------------------------------*/
import BaseButton from "../../components/ui/BaseButton.vue";
import BaseErrorMessage from "../../components/ui/BaseErrorMessage.vue";
import EnquiryNewWebsiteCard from "../../components/enquiry/entry/EnquiryNewWebsiteCard.vue";
import EnquiryHeader from "../../components/enquiry/entry/EnquiryHeader.vue";
import EnquiryWebsiteRedesignCard from "../../components/enquiry/entry/EnquiryWebsiteRedesignCard.vue";
import EnquiryWebsiteMaintenanceCard from "../../components/enquiry/entry/EnquiryWebsiteMaintenanceCard.vue";
import EnquirySEOCard from "../../components/enquiry/entry/EnquirySEOCard.vue"
import EnquirySomethingElseCard from "../../components/enquiry/entry/EnquirySomethingElseCard.vue"
import EnquiryFooter from "../../components/enquiry/entry/EnquiryFooter.vue"
import EnquiryConfirmation from "../../components/enquiry/entry/EnquiryConfirmation.vue";
import Navbar2 from "../../components/layout/Navbar.vue";
import {PhoneIcon, EnvelopeIcon} from "@heroicons/vue/24/solid/"
/*-------------------------------------------------------------------------------*/
/* Services and Utilities
/*-------------------------------------------------------------------------------*/
import useMiscService from "../../services/misc/useMiscService.js";
import useErrorService from "../../services/useErrorService.js";
/*-------------------------------------------------------------------------------*/
/* Stores
/*-------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------*/
/* Validation
/*-------------------------------------------------------------------------------*/

/*===============================================================================*/
/* Props
/*===============================================================================*/

/*===============================================================================*/
/* Emits
/*===============================================================================*/

/*===============================================================================*/
/* Variable Declaration and Initialisation
/*===============================================================================*/
const router = useRouter()
const errorMessage = ref({})
const enquiryHeader = ref(null)
const enquiryNewWebsiteCard = ref(null)
const enquiryWebsiteRedesignCard = ref(null)
const enquiryWebsiteMaintenanceCard = ref(null)
const enquirySEOCard = ref(null)
const enquirySomethingElseCard = ref(null)
const enquiryFooter = ref(null)

let enquiryType = ref('nought')
let enquirySelected = ref(false)
let flgIsSubmitting = ref(false)
let flgSubmissionSuccessful = ref(false)

let consolidateFormValues = {}

const {storeEnquiry} = useMiscService()
const {errorMessageHandler} = useErrorService()
/*===============================================================================*/
/* Lifecycle Hooks
/*===============================================================================*/

/*===============================================================================*/
/* Functions
/*===============================================================================*/
const onSubmit = async (e) => {
    e.preventDefault
    flgIsSubmitting.value = true
    let formsToValidate = []
    let sfm1 = await enquiryHeader.value.validateForm()
    formsToValidate.push(sfm1)
    console.log(enquiryType.value)
    if (enquiryType.value === 'New Website') {
        let sfm2 = await enquiryNewWebsiteCard.value.validateForm()
        console.log(sfm2)
        formsToValidate.push(sfm2)
    }
    if (enquiryType.value === 'Redesign of Existing Website') {
        let sfm3 = await enquiryWebsiteRedesignCard.value.validateForm()
        console.log(sfm3)
        formsToValidate.push(sfm3)
    }
    if (enquiryType.value === 'Website Maintenance') {
        let sfm4 = await enquiryWebsiteMaintenanceCard.value.validateForm()
        formsToValidate.push(sfm4)
    }
    if (enquiryType.value === 'Search Engine Optimisation and Ranking') {
        let sfm5 = await enquirySEOCard.value.validateForm()
        formsToValidate.push(sfm5)
    }
    if (enquiryType.value === 'Something Else') {
        let sfm6 = await enquirySomethingElseCard.value.validateForm()
        formsToValidate.push(sfm6)
    }
    let sfm7 = await enquiryFooter.value.validateForm()
    formsToValidate.push(sfm7)

    Promise.all(formsToValidate).then(result => {
        console.log(result)
        let formValid = true
        for (const element of result) {
            if (element.valid === false) {
                formValid = false
                break
            } else {
                consolidateFormValues = {...consolidateFormValues, ...element.formValues}
            }
        }
        if (formValid === true) {
            console.log(consolidateFormValues)
            saveEnquiry()
        } else {
            errorMessage.value.title = "Oops - something doesn't look right."
            errorMessage.value.description = "Please check that all the fields highlighted with a red asterisk are present, that " +
                  "there are no error messages showing  and then give it another go."
            console.log("failed")
            flgIsSubmitting.value = false
        }
    })
}
const saveEnquiry = async () => {
    try {
        await storeEnquiry(consolidateFormValues)
        errorMessage.value.title = null
        errorMessage.value.description = null
        flgSubmissionSuccessful.value = true
        flgIsSubmitting.value = false
        setTimeout(() => {
                  //flgSubmissionSuccessful.value = false
                  router.push({name: "home"})
              },
              4000
        )

    } catch (e) {
        errorMessage.value = await errorMessageHandler(e)
        flgIsSubmitting.value = false
    }
}
const changeEnquiryType = (newEnquiryType) => {
    enquirySelected.value = true
    enquiryType.value = newEnquiryType
}

</script>

<style scoped>

</style>