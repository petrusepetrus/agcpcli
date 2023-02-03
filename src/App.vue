<template>
    <router-view :key="$route.fullPath" />
</template>
<script setup>
/*
The :key="$route.fullPath option on the router-view ensures that the router
reloads pages whose base URL is the same but the query parameter is different
The default is not so /users/1 changing to /users/2 will not trigger a reload
normally. This option forces vue router to assess the whole URL in order to know#
when to reload
 */
</script>

