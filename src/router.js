import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './page/HelloWorld.vue'
import Selector from './page/Selector.vue'
import Responsive from './page/Responsive.vue'
import Question from './page/Question.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/hello', component: HelloWorld },
  { path: '/selector', component: Selector },
  { path: '/responsive', component: Responsive},
  { path: '/question', component: Question }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
