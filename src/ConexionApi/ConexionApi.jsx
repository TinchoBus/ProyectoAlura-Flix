import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:3000/"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}

export const guardar = async (url,dato)=>{
    await api.post(url,dato)
}

export const actualizar = async (url, dato) => {
    try {
        await api.patch(url, dato);

    } catch (error) {
        console.error('Error al actualizar:', error);
    }
}

export const borrar = async (url,dato)=>{
    await api.delete(url,dato).then().catch()
}

