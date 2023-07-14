import { createApp } from 'vue';
import App from './App.vue';
import Maska from 'maska';
import moment from 'moment'

const app = createApp(App);

app.use(Maska) //Biblioteca própria do vue em formato de plugin
app.config.globalProperties.$moment = moment; //Biblioteca global não específica pro vue como um plugin
app.config.globalProperties.$moment.locale('pt-br'); //Definindo o local padrão para datas de forma regional

app.mount('#app')
// createApp(App).mount('#app')
