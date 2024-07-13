import {Campo} from "../../Components/Campo/Campo.jsx";
import {Categorias} from "../../Components/SelectCategoria/Categorias.jsx";
import styled from "styled-components";
import {buscar, guardar} from "../../ConexionApi/ConexionApi.jsx";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const ContenedorFormulario = styled.div
    `
        background-color: #111111;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
const CabeceroForm = styled.div
    `
        background-color: #111111;
        width: 782px;
        height: 136px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #F5F5F5;

        h1 {
            font-family: Roboto, sans-serif;
            font-size: 60px;
            margin: 0;
        }

        p {
            font-size: 20px;
            font-family: Roboto, sans-serif;
        }
    `
const FormEstilizado = styled.form
    `
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 1000px;
        height: 860px;
        background-color: #111111;
        margin: 0 auto;

        div {
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            gap: 0 20px;
        }

        h1 {
            color: #f5f5f5;
            border-top: 5px solid #262626;
            border-bottom: 5px solid #262626;
            width: 100%;
            padding: 20px 0;
        }

        button {
            width: 180px;
            height: 54px;
            margin: 0 20px;
            border-radius: 10px;
            background-color: transparent;
            border: 3px solid #f5f5f5;
            color: #f5f5f5;
            font-size: 20px;
        }

        button:hover {
            border-color: #2271D1;
        }
    `

const CamposEstilizados = styled.div
    `
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 120px;

        label {
            font-size: 20px;
            margin-bottom: 10px;
            color: #F5F5F5;
            display: block;
        }

        input {
            width: 470px;
            height: 62px;
            border-radius: 10px;
            background-color: #191919;
            border: none;
            outline: 3px solid #555555;
            font-size: 20px;
            color: #F5F5F5;
        }

        input:focus-within, textarea:focus-within {
            outline-color: blueviolet;
            box-shadow: 0 0 20px 2px blueviolet;
        }

        textarea {
            margin: 0;
            background-color: #191919;
            height: 500px;
            width: 573px;
            border-radius: 10px;
            outline: 3px solid #555555;
            color: #F5F5F5;
            font-size: 20px;
        }

    `

export const AgregarVideo = ({url}) => {

    const [tarjetas, setTarjetas] = useState([])
    useEffect(() => {
        buscar(url, setTarjetas).catch(error => console.log(error))
    }, [tarjetas]);
    const navegador = useNavigate()

    const registrar = (ev) => {
        ev.preventDefault()
        const titulo = document.querySelector('#titulo').value
        const categoria = document.querySelector('#categoria').value
        const imagen = document.querySelector('#imagen').value
        const enlace = document.querySelector('#enlace').value
        const descripcion = document.querySelector('#desc').value

        const nuevaTarjeta = {
            id: `${tarjetas.length + 1}`,
            titulo,
            categoria,
            imagen,
            enlace,
            descripcion
        }

        guardar(url, nuevaTarjeta).then(resp => {
            alert('Tarjeta guardada exitosamente.');
        })
            .catch(error => {
                alert(`Ocurrió un error al intentar guardar la tarjeta.${error}`);
            });
        navegador('/')
    }

    return (
        <ContenedorFormulario>
            <CabeceroForm>
                <h1>Nuevo Video</h1>
                <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            </CabeceroForm>
            <FormEstilizado onSubmit={registrar}>
                <h1>Crear Tarjeta</h1>
                <div>
                    <CamposEstilizados>
                        <label htmlFor={'titulo'}>Titulo</label>
                        <Campo type="text" id={'titulo'} place={'Ingrese el titulo'}/>
                    </CamposEstilizados>

                    <CamposEstilizados>
                        <label htmlFor="">Categoría</label>
                        <Categorias url={"/categorias"}/>
                    </CamposEstilizados>
                </div>
                <div>
                    <CamposEstilizados>
                        <label htmlFor={'enlace'}>Imagen</label>
                        <Campo type="text" id={'imagen'} place={'El enlace es obligatorio'}/>
                    </CamposEstilizados>

                    <CamposEstilizados>
                        <label htmlFor="">Video</label>
                        <Campo type="text" id={'enlace'} place={'Ingrese el enlace del video'}/>
                    </CamposEstilizados>
                </div>
                <div>
                    <CamposEstilizados>
                        <label htmlFor="">Descripción</label>
                        <textarea name="" id="desc" cols="30" rows="10"></textarea>
                    </CamposEstilizados>
                </div>
                <button>GUARDAR</button>
                <button type={'reset'}>LIMPIAR</button>
                <Link to={'/addcategoria'}>
                    <button>AGREGAR CATEGORIA</button>
                </Link>
            </FormEstilizado>
        </ContenedorFormulario>
    )
}