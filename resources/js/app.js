/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import ElementUI, {Message} from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import VueRouter from 'vue-router'
Vue.use(ElementUI, {locale})
Vue.use(VueRouter)
import moment from 'moment'
const routes = [
    {
        path: '/',
        component: resolve => require(["./components/dashboard/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-dashboard',
                component: resolve => require(["./components/dashboard/AppointmentView.vue"], resolve),
            },
            ]
    }, {
    path: '/appointments',
        component: resolve => require(["./components/appointment/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-appointment',
                component: resolve => require(["./components/appointment/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-appointment',
                component: resolve => require(["./components/appointment/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-appointment',
                component: resolve => require(["./components/appointment/create.vue"], resolve),
            },
            ]
    }, {
    path: '/users',
        component: resolve => require(["./components/user/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-user',
                component: resolve => require(["./components/user/view.vue"], resolve),
            },
            {
                path: 'cre ate',
                name: 'create-user',
                component: resolve => require(["./components/user/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-user',
                component: resolve => require(["./components/user/create.vue"], resolve),
            },
            ]
    },
    ]
const router = new VueRouter({
    base: 'home',
    mode: 'history',
    routes
});

Vue.prototype.$message = Message;


$(window).on('load', function () {
    new Vue({
        data(){
            return {
                validate: {
                    required: [
                        {required: true}
                        ]
                },
                moment,
                now: 0,
                store: {
                    state: {
                        user: {},
                        loading: false,
                    },
                    mutations: {

                        handleLoading(state, data){
                            state.loading = data
                        }
                    },
                    dispatch(mutation, data = {}){ //$root.store.dispatch
                        this.mutations[mutation](this.state, data)
                    }
                }
            }
        },
        mounted(){
            var vm = this
            var x = setInterval(function () {
                vm.now = new Date().getTime()
            }, 1000);
            axios.get('/api/user').then(function (response) {
                vm.store.state.user = response.data
            })
            window.Echo.channel('appointment').listen('AppointmentDue', e => {
                this.$message({
                    type: 'success',
                    message: e.appointment.body + ' has started'
                });
            });
        },
        router,
        render: h => h(require('./components/App.vue').default)
    }).$mount('#app')
});
