<template>
    <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from "./components/learning-resources/StoredResources.vue";

export default {
    components: {
        StoredResources,
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
}

body {
    margin: 0;
}
</style>
