<template>
    <li>
        <base-card>
            <header>
                <h3>{{ title }}</h3>
                <delete-button mode="flat" @click="deleteResource(id)">Delete</delete-button>
            </header>
        <p>{{ description }}</p>
        <nav>
            <a target="_blank" :href="link">View Resource</a>
        </nav>
        </base-card>
    </li>
</template>

<script>
export default {
    props: ['id', 'title', 'description', 'link'],
    inject: ['deleteResource']
};
</script>

<style scoped>
li {
    margin: auto;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3 {
    font-size: 1.25rem;
    margin: 0.25rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #2a9e00;
}

a:hover,
a:active {
    color: #3ee800;
}
</style>
