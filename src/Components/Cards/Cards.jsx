import {Card} from "../Card/Card.jsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {buscar} from "../../ConexionApi/ConexionApi.jsx";
import {ModalEdicion} from "../Modal/ModalEdicion.jsx";

const ContenedorCards = styled.div`
    width: 1280px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 10px;
    padding: 10px 0;

    button {
        width: auto;
        height: 56px;
        border-radius: 15px;
        background-color: ${props=>props.$color ? props.categoria.color : '#222222'};
        font-family: Roboto, sans-serif;
        font-weight: normal;
        font-size: 32px;
        padding: 0 10px;
        color: #f5f5f5;
    }
`

const Cardss = styled.div`
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 10px auto;
`

export const Cards = ({url, url2,estado,setEstado}) => {

    const [tarjetas, setTarjetas] = useState([]);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        buscar(url, setTarjetas).catch((error) => console.log(error));
        buscar(url2, setCategorias).catch((error) => console.log(error));
    }, [url, url2,tarjetas]);

    return (
        <ContenedorCards>
            {categorias.map((categoria) => {//frontend
                const tarjetasFiltradas = tarjetas.filter((tarjeta) => tarjeta.categoria === categoria.nombreequipo);
                if (tarjetasFiltradas.length === 0) {
                    return null; // No renderizar si no hay tarjetas
                }
                return (
                    <ContenedorCards key={categoria.nombreequipo} style={{backgroundColor: `${categoria.color}40`}}>
                        <button style={{backgroundColor:categoria.color}} >{categoria.nombreequipo}</button>
                        <Cardss>
                            {tarjetasFiltradas.map((tarjeta) => (
                                <Card tarjeta={tarjeta} key={tarjeta.id}/>
                            ))}
                        </Cardss>
                    </ContenedorCards>
                );
            })}
        </ContenedorCards>
    )
}