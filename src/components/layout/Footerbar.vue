<template>
    <footer class="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-md px-4 pt-12 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-16">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8 xl:col-span-1">
                    <div class="text-base text-gray-500">
                        <span>
                             <span class="sr-only">Agapanthus Consulting</span>
                            <img class="h-12 w-auto w-12 rounded-full border-cyan-600 border-solid border-1 "
                                 src="/src/assets/images/agcplogotrsp150x150.png"
                                 alt="Agapanthus Consulting Logo"/>
                        Agapanthus Consulting
                        </span>
                        Making websites better by design.
                    </div>

                    <div class="flex space-x-6">
                        <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href"
                           class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">{{ item.name }}</span>
                            <component :is="item.icon" class="h-6 w-6" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-base font-medium text-gray-900">Solutions</h3>
                            <ul role="list" class="mt-4 space-y-4">
                                <li v-for="item in footerNavigation.solutions" :key="item.name">
                                    <router-link
                                          :active-class="'border-gray-900 text-gray-900 inline-flex items-center border-b-2 text-sm font-medium'"
                                          :class="'text-base text-gray-500 hover:text-gray-900'"
                                          :to="item.href"
                                    >
                                        {{ item.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-12 md:mt-0">
                            <h3 class="text-base font-medium text-gray-900">Support</h3>
                            <ul role="list" class="mt-4 space-y-4">
                                <li v-for="item in footerNavigation.support" :key="item.name">
                                    <router-link
                                          :active-class="'border-gray-900 text-gray-900 inline-flex items-center border-b-2 text-sm font-medium'"
                                          :class="'text-base text-gray-500 hover:text-gray-900'"
                                          :to="item.href"
                                    >
                                        {{ item.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-base font-medium text-gray-900">Company</h3>
                            <ul role="list" class="mt-4 space-y-4">
                                <li v-for="item in footerNavigation.company" :key="item.name">
                                    <router-link
                                          :active-class="'border-gray-900 text-gray-900 inline-flex items-center border-b-2 text-sm font-medium'"
                                          :class="'text-base text-gray-500 hover:text-gray-900'"
                                          :to="item.href"
                                    >
                                        {{ item.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-12 md:mt-0">
                            <h3 class="text-base font-medium text-gray-900">Legal</h3>
                            <ul role="list" class="mt-4 space-y-4">
                                <li v-for="item in footerNavigation.legal" :key="item.name">
                                    <router-link
                                          :active-class="'border-gray-900 text-gray-900 inline-flex items-center border-b-2 text-sm font-medium'"
                                          :class="'text-base text-gray-500 hover:text-gray-900'"
                                          :to="item.href"
                                    >
                                        {{ item.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 border-t border-gray-200 py-8">
                <p class="text-base text-gray-400 xl:text-center">&copy; 2020 Your Company, Inc. All rights
                    reserved.</p>
            </div>
        </div>
    </footer>

</template>

<script setup>
import {h, defineComponent} from "vue";

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
        {name: 'About', href: '/about-me'},

    ],
    legal: [
        {name: 'Privacy', href: '/data-usage-policy'},
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/AgapanthusConsulting',
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
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/peter-stone-3a58762',
            icon: defineComponent({
                render: () =>
                      h('svg', {fill: 'currentColor', viewBox: '0 0 24 24'}, [
                          h('path', {
                              'fill-rule': 'nonzero',
                              d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 ' +
                                    '5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 ' +
                                    '0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 ' +
                                    '1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 ' +
                                    '0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                              'clip-rule': 'evenodd',
                          }),
                      ]),
            })
        },
    ],
}
</script>

<style scoped>

</style>