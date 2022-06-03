<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Alterar Cliente</h3>
            <form @submit.prevent="onUpdateForm">
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
                    <button class="btn btn-primary btn-block">Alterar</button>
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
        created() {
            let dbRef = db.collection('users').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.user = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('users').doc(this.$route.params.id)
                .update(this.user).then(() => {
                    console.log("Alteração realizada!");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>