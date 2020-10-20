<template>
    <div>
        <div v-if="handleAppointment" class="card-deck">
            <appointment-grid v-for="appointment in appointments" :key="appointment.id" :object="appointment"></appointment-grid>
            </div>
        <span v-else>No Result</span>
        </div>

    </template>
<script>
    import AppointmentGrid from './../Table/appointment-grid.vue'
    export default{
        components: {
            AppointmentGrid
        },
        data(){
            return {
                appointments: []
            }
        },
        computed: {
            handleAppointment(){
                return !_.isEmpty(this.appointments)
            }
        },
        beforeRouteEnter (to, from, next) {
            axios.get(`/api/appointments`, {params: to.query}).then(function (response) {
                next(vm => vm.setData(response.data))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            axios.get(`/api/appointments`, {params: to.query}).then(function (response) {
                vm.setData(response.data)
                next()
            })
        },
        methods: {
            setData(response){
                this.appointments = response.data},
        }
    }
    </script>
