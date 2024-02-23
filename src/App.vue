<template>
    <the-header title="Remember Me"></the-header>
    <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
    components: {
        TheHeader,
        TheResources
    }
};
</script>

<style>
@import "./assets/base.css";
</style>
