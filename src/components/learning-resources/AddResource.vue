<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input">
        <template #default>
            <p>There's an invalid input.</p>
            <p>Please, check all inputs and make sure that you enter something into each input field.</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput" @keyup.enter="submitData">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <input id="description" name="description" rows="3" ref="descriptionInput" @keyup.enter="submitData">
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkInput" @keyup.enter="submitData">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            inputIsInvalid: false
        };
    },
    methods: {
        submitData() {
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.descriptionInput.value;
            const enteredUrl = this.$refs.linkInput.value;

            if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredUrl.trim() === ''){
                this.inputIsInvalid = true;
                return;
            }

            this.addResource(enteredTitle, enteredDescription, enteredUrl);
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccffda;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #2a9e00;
    background-color: #e4f7e9;
}

.form-control {
    margin: 1rem 0;
}
</style>