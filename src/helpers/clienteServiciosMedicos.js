import axios from "axios"

const consultarTodo = async () => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/serviciosMedicos`).then(r => r.data)
    console.log(data)
    return data;
}

export const consultarTodoFachada = async () => {
    return await consultarTodo();
}

const consultarId = async (id) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/serviciosMedicos/${id}`).then(r => r.data)
    console.log(data)
    return data;
}

export const consultarIdFachada = async (id) => {
    return await consultarId(id);
}