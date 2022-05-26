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
                    <label>Serviço</label>
                    <input type="text" class="form-control" v-model="user.servico" required>
                </div>
               <div class="form-group">
                    <label>Barbeiro</label>
                    <input type="text" class="form-control" v-model="user.barbeiro" required>
                </div>
               <div class="form-group">
                    <label>Data</label>
                    <input type="text" class="form-control" v-model="user.data" required>
                </div>
               <div class="form-group">
                    <label>Hora</label>
                    <input type="text" class="form-control" v-model="user.hora" required>
                </div>                                                                
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Marcar Hora</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import { db } from '../firebaseDb';
    export default {
        data() {
            return {
                user: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('users').add(this.user).then(() => {
                    alert("User successfully created!");
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