import styled from "styled-components";
import {BiEditAlt} from "react-icons/bi";
import {MdOutlineDeleteForever} from "react-icons/md";
import {ModalEdicion} from "../Modal/ModalEdicion.jsx";
import {useEffect, useState} from "react";
import {borrar} from "../../ConexionApi/ConexionApi.jsx";

const CardEstilizado = styled.div
    `
        width: 360px;
        height: 268px;
        border: 4px solid #6BD1FF;
        border-radius: 15px;
        box-shadow: 0 0 3px 7px #6BD1FF inset;
        overflow: hidden;
    `
const VideoEstilizado = styled.div
    `
        display: flex;
        width: 360px;
        height: 218px;
        overflow: hidden;

        a {
            width: 380px;


        }

        img {
            width: 354px;
            height: 222px;
            object-fit: cover;
            border: 4px solid #6BD1FF;
            border-radius: 10px 10px 0 0;
        }

    `
const EdicionEstilizado = styled.div
    `
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #222222;
        border: 4px solid #6BD1FF;
        border-radius: 0 0 10px 10px;
        .icono {
            font-size: 30px;
            color: #F5F5F5;
        }

        P {
            font-size: 20px;
            color: #F5F5F5;
        }

        div {
            display: flex;
            align-items: center;
            gap: 0 10px;
            padding: 0 40px;
            box-sizing: border-box;
            height: 34px;
        }

    `

export const Card = ({tarjeta}) => {

    const [estado,setEstado] = useState(false)

    const {id, titulo, enlace, imagen, categoria, descripcion} = tarjeta

    const editar = ()=>{
        setEstado(true)
    }

    const eliminar =(url,tarjeta)=>{
        borrar(url, tarjeta).then().catch()

    }

    return (
        <CardEstilizado>
            <VideoEstilizado>
                <a href={enlace} target={'blank'}>
                    <img src={imagen}  alt=""/>
                </a>
            </VideoEstilizado>
            <EdicionEstilizado>
                <div>
                    <MdOutlineDeleteForever className={'icono'}/>
                    <p onClick={()=>{
                        eliminar(`/videos/${id}`,tarjeta)
                    }}>Borrar</p>
                </div>
                <div>
                    <BiEditAlt className={'icono'}/>
                    <p onClick={editar}>Editar</p>
                </div>
            </EdicionEstilizado >
            {estado && <ModalEdicion tarjeta={tarjeta} estado={estado} setEstado={setEstado}/>}
        </CardEstilizado>
    )
}