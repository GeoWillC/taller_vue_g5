import axios from "axios"

const consultarHTodo = async () => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/historial`).then(r => r.data)
    console.log(data)
    return data;
}

export const consultarHTodoFachada = async () => {
    return await consultarHTodo();
}

const consultarCedula = async (cedula) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/historial/${cedula}`).then(r => r.data)
    console.log(data)
    return data;
}

export const consultarCedulaFachada = async (cedula) => {
    return await consultarCedula(cedula);
}