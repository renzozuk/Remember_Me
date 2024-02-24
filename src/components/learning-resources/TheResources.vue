<template>
    <base-card>
        <square-button @click="setSelectedTab('stored-resources')" :mode="storedResourceButtonMode">Stored Resources</square-button>
        <square-button @click="setSelectedTab('add-resource')" :mode="addResourceButtonMode">Add Resource</square-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
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
            storedResources: []
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
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
        },
        addResource(title, description, url) {
            const newResource = {
                id: this.storedResources.length + 1,
                title: title,
                description: description,
                link: url
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },removeResource(resourceId) {
            const resourceIndex = this.storedResources.findIndex(resource => resource.id === resourceId);
            this.storedResources.splice(resourceIndex, 1);
        }
    }
}
</script>