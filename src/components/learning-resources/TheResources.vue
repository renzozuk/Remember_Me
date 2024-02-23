<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourceButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResourceButtonMode">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 1,
                    title: "Offical Guide",
                    description: "This is an official guide.",
                    link: "https://officialguide.com"
                },
                {
                    id: 2,
                    title: "Unoffical Guide",
                    description: "This is an unofficial guide.",
                    link: "https://unofficialguide.com"
                },
            ]
        };
    },
    provide() {
        return {
            resources: this.storedResources
        };
    },
    computed: {
        storedResourceButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResourceButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>