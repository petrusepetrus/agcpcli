import {createApp, watch} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'

import router from "./router";
import axios from 'axios'
import './index.css'
import hasRole from './directives/HasRoleDirective.js';
import {useAuthStore} from "./stores/AuthStore.js";

axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true




const app=createApp(App)
app.use(createPinia())
/*
See if we have any persisted auth credentials in local storage and if so
rehydrate the authStore
 */
const authStore=useAuthStore()

//localStorage.removeItem('authStore')

if(localStorage.getItem('authStore')){
    const returnedState=JSON.parse(localStorage.getItem('authStore'))
    authStore.authenticated=returnedState.authenticated
    authStore.verified=returnedState.verified
    authStore.user=returnedState.user
    authStore.userRoles=returnedState.userRoles
    authStore.permissions=returnedState.userPermissions
}
/*
Subscribe to the authStore and watch for changes to the store state
If a change occurs, store the new state to local storage to rehydrate
the store when necessary
 */
authStore.$subscribe((mutation,state)=>{
    localStorage.setItem('authStore', JSON.stringify(state))
},{ detached:true })

app.use(router)
app.directive('hasRole', hasRole);
app.mount('#app')
