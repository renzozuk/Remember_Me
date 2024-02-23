<template>
    <button :type="type" :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['type', 'mode']
}
</script>

<style scoped>
button {
    border-radius: 10px;
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #e60202;
    border: 1px solid #e60202;
    color: white;
    cursor: pointer;
}

button:hover,
button:active {
    background-color: #9c0000;
    border-color: #9c0000;
}

.flat {
    background-color: transparent;
    color: #e60202;
    border: none;
}

.flat:hover,
.flat:active {
    background-color: #e60202;
    color: #ffffff;
}
</style>