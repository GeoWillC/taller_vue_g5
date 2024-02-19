import axios from "axios"

const consultarTodo = async() => {
const data= axios.get(`http://localhost:8080/API/v1.0/Registro/facturas`).then(r=>r.data)
console.log(data)
    return data
}

export const consultarFachada = async()=>{
        return await consultarTodo();
} 