<template>
    <the-header title="Remember Me"></the-header>
    <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue'
import TheHeader from './components/layouts/TheHeader.vue'

export default {
    components: {
        StoredResources,
        TheHeader
    },
    data() {
        return {
            storedResources: [
                {
                    id: 1,
                    title: "Offical Guide",
                    description: "This is an official guide.",
                    link: "https://officialguide.com",
                },
                {
                    id: 2,
                    title: "Unoffical Guide",
                    description: "This is an unofficial guide.",
                    link: "https://unofficialguide.com",
                },
            ],
        };
    },
};
</script>

<style>
@import "./assets/base.css"
</style>
