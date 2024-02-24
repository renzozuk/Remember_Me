import { createApp } from 'vue';

import App from './App.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseCard from './components/UI/BaseCard.vue';
import DeleteButton from './components/UI/DeleteButton.vue';
import RoundButton from './components/UI/RoundButton.vue';
import SquareButton from './components/UI/SquareButton.vue';

const app = createApp(App);

app.component('base-dialog', BaseDialog);
app.component('base-card', BaseCard);
app.component('delete-button', DeleteButton);
app.component('round-button', RoundButton);
app.component('square-button', SquareButton);

app.mount('#app');
