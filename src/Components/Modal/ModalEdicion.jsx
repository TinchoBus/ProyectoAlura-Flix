import {Campo} from "../Campo/Campo.jsx";
import {Categorias} from "../SelectCategoria/Categorias.jsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {actualizar} from "../../ConexionApi/ConexionApi.jsx";


const Emergente = styled.dialog`
    background-color: #111111;
    margin: 0 auto;
    ${(props) => props.open && `
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.65);
  `}
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

export const ModalEdicion = ({tarjeta, estado, setEstado}) => {

    const cerrarEdicion = (ev) => {
        ev.preventDefault()
        setEstado(!estado)

    }

    const [titulo, setTitulo] = useState(tarjeta.titulo)
    const [categoria, setCategoria] = useState(tarjeta.categoria)
    const [imagen, setImagen] = useState(tarjeta.imagen)
    const [enlace, setEnlace] = useState(tarjeta.enlace)
    const [descripcion, setDescripcion] = useState(tarjeta.descripcion)

    const tarjetaupdate = {
        titulo: titulo,
        categoria: categoria,
        imagen: imagen,
        enlace: enlace,
        descripcion: descripcion
    }
    const actualizaTarjeta = (url, tarjetaupdate) => {
        actualizar(url, tarjetaupdate).then().catch(error=>console.log(error))
        setEstado(!estado)
    }

    return (
        <Emergente open={estado}>
            <CabeceroForm>
                <p>COMPLETE EL FORMULARIO PARA EDITAR LA TARJETA DE VIDEO</p>
            </CabeceroForm>
            <FormEstilizado>
                <h1>Editar Tarjeta</h1>
                <div>
                    <CamposEstilizados>
                        <label htmlFor={'titulo'}>Titulo</label>
                        <Campo type="text" value={titulo} id={'titulo'} place={'Ingrese el titulo'}
                               onChange={(e) => setTitulo(e.target.value)}/>
                    </CamposEstilizados>
                    {/*<CamposEstilizados>*/}
                    {/*    <label htmlFor="">Categoría</label>*/}
                    {/*    <Categorias value={categoria} url={"/categorias"} onChange={(e) => setCategoria(e.target.value)}/>*/}
                    {/*</CamposEstilizados>*/}
                </div>
                <div>
                    <CamposEstilizados>
                        <label htmlFor={'enlace'}>Imagen</label>
                        <Campo type="text" value={imagen} id={'imagen'} place={'El enlace es obligatorio'}
                               onChange={(e) => setImagen(e.target.value)}/>
                    </CamposEstilizados>

                    <CamposEstilizados>
                        <label htmlFor="">Video</label>
                        <Campo type="text" value={enlace} id={'enlace'} place={'Ingrese el enlace del' +
                            ' video'} onChange={(e) => setEnlace(e.target.value)}/>
                    </CamposEstilizados>
                </div>
                <div>
                    <CamposEstilizados>
                        <label htmlFor="">Descripción</label>
                        <textarea name="" value={descripcion} id="desc" cols="30" rows="10"
                                  onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    </CamposEstilizados>
                </div>
                <button onClick={(ev)=>{
                    ev.preventDefault()
                    actualizaTarjeta(`/videos/${tarjeta.id}`,tarjetaupdate)
                }}>GUARDAR</button>
                <button onClick={cerrarEdicion}>CERRAR</button>
            </FormEstilizado>
        </Emergente>
    )
}