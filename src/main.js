import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import DeleteButton from './components/UI/DeleteButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('delete-button', DeleteButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
