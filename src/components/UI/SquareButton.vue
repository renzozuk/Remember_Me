<template>
    <button :type="type" :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ["type", "mode"]
};
</script>

<style scoped>
button {
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #2a9e00;
    border: 1px solid #2a9e00;
    color: white;
    cursor: pointer;
}

button:hover,
button:active {
    background-color: #3ee800;
    border-color: #3ee800;
}

.flat {
    background-color: transparent;
    color: #2a9e00;
    border: none;
}

.flat:hover,
.flat:active {
    background-color: #b5cfb0;
    border: 1px solid #2a9e00;
}
</style>
