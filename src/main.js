import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { router } from './router'
import { store } from './store.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareCheck, faSquare, faArrowUpRightFromSquare, faHandPointUp, faLaughSquint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSquareCheck, faSquare, faArrowUpRightFromSquare, faHandPointUp, faLaughSquint)

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


var app = createApp(App)
app.use(router)
app.use(store)
app.component('fa', FontAwesomeIcon )
app.mount('#app')
