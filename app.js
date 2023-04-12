import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import main from './main.js'
import myHeader from './components/myHeader.js';
import mySection from './components/mySection.js';
import myColLeft from './components/myColLeft.js';
import myColRight from './components/myColRight.js';

let app = createApp(main);
app.component(myHeader.name, myHeader)
app.component(mySection.name, mySection)
app.component(myColLeft.name, myColLeft)
app.component(myColRight.name, myColRight)

app.mount("#app");