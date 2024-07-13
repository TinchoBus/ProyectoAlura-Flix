import styled from "styled-components";
import {useState,useEffect} from "react";
import {buscar} from "../../ConexionApi/ConexionApi.jsx";

const SelectEstilizado = styled.select
    `
        height: 60px;
        border-radius: 10px;
        font-size: 20px;
        background-color: #191919;
        color: #F5F5F5;
        outline: 3px solid #555555;
        &:focus-within{
            outline-color: blueviolet;
            border: none;
            box-shadow: 0 0 20px 2px blueviolet;
        }
    `

export const Categorias = ({url,value,onChange}) => {

    const [categorias,setCategorias]=useState([])

    useEffect(()=>{
       buscar(url,setCategorias).catch(error=>console.log(error))
    },[url])

    return (
        <>
            <SelectEstilizado name="" id="categoria" required={true}>
                <option value="">Seleccione una categoría</option>
                {categorias.map((categoria) => (
                    <option value={categoria.nombreequipo} key={categoria.id} selected={categoria.nombreequipo === value}
                    >
                        {categoria.nombreequipo}
                    </option>
                ))}
            </SelectEstilizado>

        </>
    )
}