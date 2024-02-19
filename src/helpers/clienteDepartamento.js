import axios from "axios";
const consultar = async () => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/departamentos`).then(r => r.data);
    console.log(data)
    return data
}

export const consultarFachada = async () => {
    return await consultar();
}

const consultarUno = async (id) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/departamentos/${id}`).then(r => r.data);
    console.log(data)
    return data
}

export const consultarUnoFachada = async () => {
    return await consultarUno(1);
}