import VueRouter from 'vue-router'
import Home from './views/Home'
import Card from './views/Card'

export default new VueRouter ({
    routes: [
        {path: '', component: Home},
        {path: '/card/:id', component: Card, props: true}
    ],
    mode: 'history'
})