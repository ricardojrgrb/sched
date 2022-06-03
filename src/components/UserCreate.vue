<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Atendimento</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" class="form-control" v-model="user.nome" required>
                </div>
                <div class="form-group">
                    <label>Sobrenome</label>
                    <input type="text" class="form-control" v-model="user.sobrenome" required>
                </div>
                <div class="form-group">
                    <label>Telefone</label>
                    <input type="text" class="form-control" v-model="user.telefone" required>
                </div>
               <div class="form-group">
                    <label>Data</label>
                    <input type="text" class="form-control" v-model="user.data" required>
                </div>
                <div class="form-group">
                    <label>Escolher Barbeiro</label>
                    <v-select v-model="user.barbeiro" :options="barbers" :reduce="barber => barber.name" label="barber" />
                </div>
                <div class="form-group">
                    <label>Escolher Horário</label>
                    <v-select v-model="user.hora" :options="hours" :reduce="hour => hour.vhour" label="hour" />
                </div>
                <div class="form-group">
                    <label>Escolher Serviço</label>
                    <v-select v-model="user.servico" :options="services" :reduce="service => service.vservice" label="service" />
                </div>
                <br>
                <br>                                                               
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Marcar Hora</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueMaterial from 'vue-material'
    import 'vue-material/dist/vue-material.min.css'
    import { db } from '../firebaseDb';
    Vue.use(VueMaterial)
    export default {
        name: 'OptgroupSelect',
        data() {
            return {
                user: {
                    barber: null
                },
                barbers:[
                    {name: 'André', barber: 'André - Contêiner Posto Nestor'},
                    {name: 'Douglas', barber: 'Douglas - Contêiner Posto Nestor'},
                    {name: 'Eduarda', barber: 'Eduarda - Matriz'},
                    {name: 'Thiago', barber: 'Thiago - Matriz'},
                ],
                hours:[
                    {vhour: '09:00', hour: '09:00h'},
                    {vhour: '09:30', hour: '09:30h'},
                    {vhour: '10:00', hour: '10:00h'},
                    {vhour: '10:30', hour: '10:30h'},
                    {vhour: '11:00', hour: '11:00h'},
                    {vhour: '11:30', hour: '11:30h'},
                    {vhour: '13:00', hour: '13:00h'},
                    {vhour: '13:30', hour: '13:30h'},
                    {vhour: '14:00', hour: '14:00h'},
                    {vhour: '14:30', hour: '14:30h'},
                    {vhour: '15:00', hour: '15:00h'},
                    {vhour: '15:30', hour: '15:30h'},
                    {vhour: '16:00', hour: '16:00h'},
                    {vhour: '16:30', hour: '16:30h'},
                    {vhour: '17:00', hour: '17:00h'},
                    {vhour: '17:30', hour: '17:30h'},
                    {vhour: '18:00', hour: '18:00h'},
                    {vhour: '18:30', hour: '18:30h'},
                    {vhour: '19:00', hour: '19:00h'},
                    {vhour: '19:30', hour: '19:30h'},
                ],
                services:[
                    {vservice: 'Barba', service: 'Barba'},
                    {vservice: 'Cabelo', service: 'Cabelo'},
                    {vservice: 'Cabelo e Barba', service: 'Cabelo e Barba'}
                ]
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('users').add(this.user).then(() => {
                    alert("Cliente Cadastrado!");
                    this.user.nome = ''
                    this.user.sobrenome = ''
                    this.user.telefone = ''
                    this.user.servico = ''
                    this.user.barbeiro = ''
                    this.user.data = ''
                    this.user.hora = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style>
.select_opts {
    width: 200px;
    height: 30px;
}
.md-layout-item {
  
}
</style>