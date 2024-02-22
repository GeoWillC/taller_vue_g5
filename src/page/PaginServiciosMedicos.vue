<template>
    <div class="container">
        <div class="consulta">
            
            <button @click="consultar">Todos los servicios</button>
            <!-- <input v-model="id" type="text"> -->
        </div>
        <div class="tablah">
            <table v-if="datos!=null">
                <tr>
                    <td>Id</td>
                    <td>Nombre</td>
                    <td>Costo</td>
                    <td>Selección</td>
                </tr>
          
                <tr v-for="dato in datos" :key="dato.id">
                    <td>{{ dato.id }}</td>
                    <td>{{ dato.nombre }}</td>
                    <td>{{ dato.costo }}</td>
                    <td><button>Agendar</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { consultarTodoFachada,consultarIdFachada } from "../helpers/clienteServiciosMedicos";

export default {
    data() {
        return {
            datos: null,
        }
    },
    methods: {
        async consultar() {
            console.log("alo")
            this.datos = await consultarTodoFachada();
        },
        async consultarId() {
            console.log("aloid")
            console.log(this.id)
            this.datos = await consultarIdFachada(this.id);
        }
    }
}
</script>

<style >
.container {
    background-color: rgb(56, 119, 160);
    width: 100%;
    height: 100%;

}

* {
    background: -webkit-linear-gradient(left, #25c481, rgb(56, 119, 160));
  background: linear-gradient(to right, #25c481, rgb(56, 119, 160));
    text-align: left;
}

.consulta {
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin-bottom: 15px;
}

table {
    width: 100%;
    height: 100%;
    table-layout: fixed;
}



.tablac {
    height: 200px;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
}

td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
body{
 
  font-family: 'Roboto', sans-serif;
}

</style>