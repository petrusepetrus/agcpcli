<template>
    <Navbar></Navbar>
    <div>
        <!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->

        <div class="bg-black">
            <main>
                <div class="bg-black pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
                    <div class="mx-auto max-w-7xl lg:px-8">
                        <div class="lg:grid lg:grid-cols-2 lg:gap-8 md:grid md:grid-cols-1">
                            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                                <div class="lg:py-24">
                                    <h1
                                          class="text-6xl block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                                        Agapanthus Consulting
                                    </h1>
                                    <h2 class="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span class="block">A better way to</span>
                                        <span class="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">build your web site</span>
                                    </h2>
                                    <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                        Specialising in websites for small businesses, Agapanthus Consulting offers a
                                        friendly, professional web design and development service.
                                    </p>
                                    <div class="mt-10 sm:mt-12">
                                        <div class="sm:flex">
                                            <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                                Want to find out more? Looking for a quote?
                                            </p>
                                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                                <button type="submit"
                                                        class="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600
                                                        py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700
                                                        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                                                    <router-link
                                                          :active-class="'border-teal-300 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'"
                                                          :class="'text-base font-medium text-white hover:text-gray-300'"
                                                          to="contact-me"
                                                    >
                                                        Contact me now
                                                    </router-link>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                    <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 md:h-full lg:w-auto lg:max-w-none"
                                         src="/src/assets/images/websitedesign.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Feature section with grid -->
                <div class="relative bg-white py-16 sm:py-24 lg:py-16">
                    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 class="text-lg font-semibold text-cyan-600">Go to market</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need
                            to create your digital footprint</p>
                        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                            A business driven process that puts you, your services and your customers at the centre of
                            the conversation.
                        </p>

                        <div class="mt-12">
                            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                <div v-for="feature in features" :key="feature.name" class="pt-6 ">
                                    <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                                        <div class="-mt-6 h-60">
                                            <div classs="">
                        <span class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                          <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true"/>
                        </span>
                                            </div>
                                            <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                                                {{ feature.name }}</h3>
                                            <p class="mt-5 text-base text-gray-500">{{ feature.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Testimonial section -->
                <div class="relative bg-black py-16 sm:py-24 lg:py-16">

                    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 mb-12">
                        <h2 class="text-lg font-semibold text-cyan-300">Testimonials</h2>
                    </div>

                    <div>
                        <div class="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
                            <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                                <div class="relative lg:-my-8">
                                    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-black lg:hidden"/>
                                    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-50 lg:w-50 lg:p-0">
                                        <div class="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-12 overflow-hidden rounded-xl shadow-xl
                                                     lg:aspect-none sm:h-6 md:h-24 lg:h-full">
                                            <img class="object-cover lg:h-full lg:w-full"
                                                 src="../../assets/images/ChrissyConnelly1024x1013.jpg"
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                                    <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                                        <blockquote>
                                            <div>
                                                <svg class="h-12 w-12 text-white opacity-25" fill="currentColor"
                                                     viewBox="0 0 32 32" aria-hidden="true">
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                                </svg>
                                                <p class="mt-6 font-medium text-white">
                                                    Peter helped us update and totally revamp our website in 2018. The
                                                    process was painless! He guided us through the brief, the stages and
                                                    the
                                                    implementation with ease. We are so pleased with the result.
                                                </p>
                                                <p class="mt-6 font-medium text-white">
                                                    The website is really easy to navigate and delivers the information
                                                    in
                                                    an easy to read and understand format - all his work !
                                                    He dealt with the video content and graphics with minimal input from
                                                    us
                                                    but consulted us regularly.
                                                </p>
                                                <p class="mt-6 font-medium text-white">
                                                    We are already seeing more traffic and enquiries coming through and
                                                    are
                                                    continuing to work with him to maximise our FB and Google presence.
                                                    Oh,
                                                    and the website was on time and in budget!
                                                </p>
                                                <p class="mt-6  font-medium text-white">
                                                    If you’re thinking about updating your website speak to Peter! His
                                                    knowledge is amazing and he’s very easy to work with.
                                                </p>
                                            </div>
                                            <footer class="mt-6">
                                                <p class="text-base font-medium text-white">Chrissy Connelly</p>
                                                <p class="text-base font-medium text-cyan-100">Owner at
                                                    <a href="https://principlepilates.com/" target="_blank"
                                                       class="h-10 w-10 rounded-full text-teal-200 underline">Principle
                                                        Pilates
                                                    </a>
                                                </p>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0 mt-32">
                            <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                                <div class="relative lg:-my-8">
                                    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-black lg:hidden"/>
                                    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-50 lg:w-50 lg:p-0">
                                        <div class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16
                                        sm:aspect-h-12 lg:aspect-none sm:h-6 md:h-12 lg:h-full">
                                            <img class="object-cover lg:h-full lg:w-full"
                                                 src="../../assets/images/LindaScott2365x2480.JPG"
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                                    <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                                        <blockquote>
                                            <div>
                                                <svg class="h-12 w-12 text-white opacity-25" fill="currentColor"
                                                     viewBox="0 0 32 32" aria-hidden="true">
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                                </svg>
                                                <p class="mt-6 font-medium text-white">
                                                    I am very pleased with the website Peter has produced for Little
                                                    Brook
                                                    House.
                                                </p>
                                                <p class="mt-6 font-medium text-white">
                                                    Peter has assessed the business needs and the website exactly
                                                    projects
                                                    Little Brook House’s philosophy; ie the commitment to Person Centred
                                                    Care
                                                    and pledge to Independent Living.
                                                </p>
                                                <p class="mt-6 font-medium text-white">
                                                    I feel the reason for this is the time Peter invested in
                                                    understanding
                                                    our
                                                    business, learning about what we are trying to achieve, about our
                                                    individual, unique USP’s and hence has got across the key messages
                                                    to
                                                    our
                                                    prospective clients.
                                                </p>
                                                <p class="mt-6 font-medium text-white">
                                                    Clients have complimented us on our website and it has resulted in
                                                    many
                                                    additional telephone enquiries.
                                                </p>
                                            </div>
                                            <footer class="mt-6">
                                                <p class="text-base font-medium text-white">Linda Scott</p>
                                                <p class="text-base font-medium text-cyan-100">Director at
                                                    <a href="https://littlebrookhouse.co.uk/" target="_blank">
                                                        <span class="h-10 w-10 rounded-full text-teal-200 underline">Little Brook House</span>
                                                    </a>
                                                </p>

                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0 mt-32">
                            <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                                <div class="relative lg:-my-8">
                                    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-black lg:hidden"/>
                                    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-30 lg:w-30 lg:p-0">
                                        <div class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl
                                        sm:aspect-w-16 sm:aspect-h-12 lg:aspect-none sm:h-6 md:h-12  lg:h-full">
                                            <img class="object-cover lg:h-full lg:w-full"
                                                 src="src/assets/images/LorraineRomney728x865.jpg"
                                                 alt="Lorraine from Affinity and Beyond"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                                    <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                                        <blockquote>
                                            <div>
                                                <svg class="h-12 w-12 text-white opacity-25" fill="currentColor"
                                                     viewBox="0 0 32 32" aria-hidden="true">
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                                </svg>
                                                <p class="mt-6 font-medium text-white">
                                                    I am extremely pleased with the website Peter designed and created.
                                                </p>
                                                <p class="mt-6 font-medium text-white">
                                                    I had a clear idea of how I wanted my website to be perceived and he
                                                    completely took this on board and followed my vision and I am
                                                    pleased to
                                                    say that I already appear to be receiving more enquires via the
                                                    internet.

                                                </p>
                                                <p class="mt-6 font-medium text-white">
                                                    The service Peter offers is exceptional and far more comprehensive
                                                    than
                                                    I had anticipated! He guided me through a complete revamp of the
                                                    business and in the process helped me to explore and establish my
                                                    business aims and strategies.

                                                </p>
                                                <p class="mt-6 font-medium text-white">
                                                    Thank you Peter – I look forward to working with you on an on-going
                                                    basis.
                                                </p>
                                            </div>
                                            <footer class="mt-6">
                                                <p class="text-base font-medium text-white">Lorraine Romney</p>
                                                <p class="text-base font-medium text-cyan-100">Owner at
                                                    <a href="https://affinity-and-beyond.co.uk/" target="_blank">
                                                        <span class="h-10 w-10 rounded-full text-teal-200 underline">Affinity And Beyond Therapy</span>
                                                    </a>
                                                </p>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- Blog section -->
                <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-16">
                    <div class="relative">
                        <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 class="text-lg font-semibold text-cyan-600">Process</h2>
                            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How We Work</p>
                            <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                                Our working methodology provides a structured approach to defining your business needs and designing a web site that will satisfy those requirements.
                            </p>
                        </div>
                        <div class="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-5 lg:px-8">
                            <div v-for="post in blogPosts" :key="post.id"
                                 class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div class="flex-shrink-0">
                                    <img class="h-48 w-full object-cover" :src="post.imageUrl" alt=""/>
                                </div>
                                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                                    <div class="flex-1">
                                        <p class="text-sm font-medium text-cyan-600">
                                            <a :href="post.category.href" class="hover:underline">{{
                                                    post.category.name
                                                }}</a>
                                        </p>
                                        <a :href="post.href" class="mt-2 block">
                                            <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                                            <p class="mt-3 text-base text-gray-500">{{ post.preview }}</p>
                                        </a>
                                    </div>
                                    <div class="mt-6 flex items-center">
                                        <div class="flex-shrink-0">
                                            <a :href="post.author.href">
                                                <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl"
                                                     :alt="post.author.name"/>
                                            </a>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-sm font-medium text-gray-900">
                                                <a :href="post.author.href" class="hover:underline">{{
                                                        post.author.name
                                                    }}</a>
                                            </p>
                                            <div class="flex space-x-1 text-sm text-gray-500">
                                                <time :datetime="post.datetime">{{ post.date }}</time>
                                                <span aria-hidden="true">&middot;</span>
                                                <span>{{ post.readingLength }} read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div class="relative bg-black">
                    <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                        <img class="h-full w-full object-cover"
                             src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                             alt=""/>
                        <div aria-hidden="true"
                             class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"/>
                    </div>
                    <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                        <div class="md:ml-auto md:w-1/2 md:pl-10">
                            <h2 class="text-lg font-semibold text-gray-300">Award winning support</h2>
                            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to
                                help</p>
                            <p class="mt-3 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
                                et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
                            <div class="mt-8">
                                <div class="inline-flex rounded-md shadow">
                                    <a href="#"
                                       class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                                        Visit the help center
                                        <ArrowTopRightOnSquareIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                                                                   aria-hidden="true"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    </div>
    <Footerbar></Footerbar>
</template>

<script setup>
import {useAuthStore} from "../../stores/AuthStore.js";
import Navbar from "../../components/layout/Navbar.vue";
import Footerbar from "/src/components/layout/Footerbar.vue"

const {user, authenticated, verified} = useAuthStore()

import {defineComponent, h} from 'vue'
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    DeviceTabletIcon,
    ShareIcon,
    BuildingOfficeIcon,
    ChatBubbleLeftRightIcon,
    DevicePhoneMobileIcon
} from '@heroicons/vue/24/outline'
import {ArrowTopRightOnSquareIcon, ChevronRightIcon} from '@heroicons/vue/20/solid'


const features = [
    {
        name: 'Business Led',
        description: 'The design always starts with understanding what you are trying to achieve as a business.',
        icon: BuildingOfficeIcon,
    },
    {
        name: 'Integrated',
        description: 'Consistent branding & messaging across your digital and non-digital channels.',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'SEO',
        description: "Reach the target audience you are interested in with content they'll love.",
        icon: UserGroupIcon,
    },
    {
        name: 'Responsive',
        description: 'Whether it is being viewed on a PC, tablet or phone, your website will always look great.',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'Flexible',
        description:
              "WordPress or bespoke build, we'll find the right platform for your business needs.",
        icon: ServerIcon,
    },
    {
        name: 'Secure',
        description:
              "Secure, robust websites to support your eCommerce and business transactional data",
        icon: ShieldCheckIcon,
    },
]
const blogPosts = [
    {
        id: 1,
        title: 'Project Definition',
        href: '#',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {name: 'Article', href: '#'},
        imageUrl:
              'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
              'We start by looking at what you are trying to accomplish as a business and, in that context, define what the web site will need to do to support those desired outcomes',
        author: {
            name: 'Roel Aufderehar',
            imageUrl:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '6 min',
    },
    {
        id: 2,
        title: 'Requirements Gathering',
        href: '#',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        category: {name: 'Video', href: '#'},
        imageUrl:
              'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
              'Building on the Project Definition, we take a more detailed look at the aesthetic and functional design of the website.',
        author: {
            name: 'Brenna Goyette',
            imageUrl:
                  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '4 min',
    },
    {
        id: 3,
        title: 'Design and Development',
        href: '#',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        category: {name: 'Video', href: '#'},
        imageUrl:
              'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
              'We take an iterative, interactive approach to website design and development. This enables us to get feedback on the design interactively and ensures problems are spotted and rectified quickly.',
        author: {
            name: 'Brenna Goyette',
            imageUrl:
                  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '4 min',
    },
    {
        id: 4,
        title: 'Implementation',
        href: '#',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: {name: 'Case Study', href: '#'},
        imageUrl:
              'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
              'We can arrange hosting services for you or we can deploy to your own web hosting provider. Once deployed, we provide one month of support whether you take out our maintenance option or not.',
        author: {
            name: 'Daniela Metz',
            imageUrl:
                  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '11 min',
    },
    {
        id: 5,
        title: 'Maintenance',
        href: '#',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: {name: 'Case Study', href: '#'},
        imageUrl:
              'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
              'We can provide no-frills technical maintenance aimed at keeping software up to date and your web site running or a more comprehensive offering that includes provision for new development on your site.',
        author: {
            name: 'Daniela Metz',
            imageUrl:
                  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '11 min',
    },
]
const footerNavigation = {
    solutions: [
        {name: 'Marketing', href: '#'},
        {name: 'Analytics', href: '#'},
        {name: 'Commerce', href: '#'},
        {name: 'Insights', href: '#'},
    ],
    support: [
        {name: 'Pricing', href: '#'},
        {name: 'Documentation', href: '#'},
        {name: 'Guides', href: '#'},
        {name: 'API Status', href: '#'},
    ],
    company: [
        {name: 'About', href: '#'},
        {name: 'Blog', href: '#'},
        {name: 'Jobs', href: '#'},
        {name: 'Press', href: '#'},
        {name: 'Partners', href: '#'},
    ],
    legal: [
        {name: 'Claim', href: '#'},
        {name: 'Privacy', href: '#'},
        {name: 'Terms', href: '#'},
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: defineComponent({
                render: () =>
                      h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
                          h('path', {
                              'fill-rule': 'evenodd',
                              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                              'clip-rule': 'evenodd',
                          }),
                      ]),
            }),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: defineComponent({
                render: () =>
                      h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
                          h('path', {
                              'fill-rule': 'evenodd',
                              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                              'clip-rule': 'evenodd',
                          }),
                      ]),
            }),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: defineComponent({
                render: () =>
                      h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
                          h('path', {
                              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                          }),
                      ]),
            }),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: defineComponent({
                render: () =>
                      h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
                          h('path', {
                              'fill-rule': 'evenodd',
                              d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                              'clip-rule': 'evenodd',
                          }),
                      ]),
            }),
        },
        {
            name: 'Dribbble',
            href: '#',
            icon: defineComponent({
                render: () =>
                      h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
                          h('path', {
                              'fill-rule': 'evenodd',
                              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
                              'clip-rule': 'evenodd',
                          }),
                      ]),
            }),
        },
    ],
}

</script>

<style scoped>

</style>