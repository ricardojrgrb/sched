<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Telefone</th>
                        <th>Serviço</th>
                        <th>Barbeiro</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user.key" v-show="user.barbeiro === 'Thiago'">
                        <td>{{ user.nome }}</td>
                        <td>{{ user.sobrenome }}</td>
                        <td>{{ user.telefone }}</td>
                        <td>{{ user.servico }}</td>
                        <td>{{ user.barbeiro }}</td>
                        <td>{{ user.data }}</td>
                        <td>{{ user.hora }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Alterar
                            </router-link>
                            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Deletar</button>
                        </td>
                    </tr>
                    <hr/>
                    <tr v-for="user in Users" :key="user.key" v-show="user.barbeiro === 'Douglas'">
                        <td>{{ user.nome }}</td>
                        <td>{{ user.sobrenome }}</td>
                        <td>{{ user.telefone }}</td>
                        <td>{{ user.servico }}</td>
                        <td>{{ user.barbeiro }}</td>
                        <td>{{ user.data }}</td>
                        <td>{{ user.hora }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Alterar
                            </router-link>
                            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Deletar</button>
                        </td>
                    </tr>
                    <hr/>
                    <tr v-for="user in Users" :key="user.key" v-show="user.barbeiro === 'André'">
                        <td>{{ user.nome }}</td>
                        <td>{{ user.sobrenome }}</td>
                        <td>{{ user.telefone }}</td>
                        <td>{{ user.servico }}</td>
                        <td>{{ user.barbeiro }}</td>
                        <td>{{ user.data }}</td>
                        <td>{{ user.hora }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Alterar
                            </router-link>
                            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Deletar</button>
                        </td>
                    </tr>
                    <hr/>
                    <tr v-for="user in Users" :key="user.key" v-show="user.barbeiro === 'Eduarda'">
                        <td>{{ user.nome }}</td>
                        <td>{{ user.sobrenome }}</td>
                        <td>{{ user.telefone }}</td>
                        <td>{{ user.servico }}</td>
                        <td>{{ user.barbeiro }}</td>
                        <td>{{ user.data }}</td>
                        <td>{{ user.hora }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Alterar
                            </router-link>
                            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import { db } from '../firebaseDb';
    
    export default {
        data() {
            return {
                Users: []
            }
        },
        created() {
            db.collection('users').onSnapshot((snapshotChange) => {
                this.Users = [];
                snapshotChange.forEach((doc) => {
                    this.Users.push({
                        key: doc.id,
                        nome: doc.data().nome,
                        sobrenome: doc.data().sobrenome,
                        telefone: doc.data().telefone,
                        servico: doc.data().servico,
                        barbeiro: doc.data().barbeiro,
                        data: doc.data().data,
                        hora: doc.data().hora,
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Confirma remoção do cliente?")) {
                db.collection("users").doc(id).delete().then(() => {
                    console.log("Cliente removido!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
</script>
<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>