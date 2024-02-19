<template>
    <div class="container">
        <div class="consulta">
            <button class="button-3" @click="consultar">Consultar</button>
            <input v-model="name" type="text">
        </div>
        <div class="tablah">
            <table>
                <tr>
                    <td>Id</td>
                    <td>Fecha</td>
                    <td>Detalle</td>
                    <td>Total</td>
                </tr>

                <tr v-for="dato in datos" :key="dato.id">
                    <td>{{ dato.id }}</td>
                    <td>{{ dato.fechaFactura }}</td>
                    <td>{{ dato.detalleFactura }}</td>
                    <td>{{ dato.total }}</td>

                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { consultarFachada } from "../helpers/clienteFactura";

export default {
    data() {
        return {
            datos: null,

        }
    },
    methods: {
        async consultar() {
            console.log("alo")
            this.datos = await consultarFachada();

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
    background: rgb(56, 119, 160);
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





th {
    background: -webkit-linear-gradient(left, #25c481, rgb(56, 119, 160));
    background: linear-gradient(to right, #25c481, rgb(56, 119, 160));
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
}

td {
    background: -webkit-linear-gradient(left, #25c481, rgb(56, 119, 160));
    background: linear-gradient(to right, #25c481, rgb(56, 119, 160));
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}

body {

    font-family: 'Roboto', sans-serif;
}
/* CSS */
.button-3 {
  appearance: none;
  background-color: #2c974b;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";


}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

</style>