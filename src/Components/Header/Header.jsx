import styled from "styled-components";
import {Link} from "react-router-dom";


const NavEstilizado = styled.nav
    `
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1280px;
        height: 125px;
        background-color: #111111;
        margin: 0 auto;
        padding: 40px;
        img{
            width: 168px;
            height: 40px;
        }
        div{
            display: flex;
            gap: 20px;
        }
    `
    const BotonEstilizado = styled.button
        `   
            width: 180px;
            height: 54px;
            border-radius: 15px;
            background-color: transparent;
            border: 2px solid;
            color: #FFFFFF;
            font-weight: 600;
            font-size: 20px;
            
            &:hover{
                background-color:  #040404;
                border-color:  #2271d1;
                color:  #2271d1;
                box-shadow: 0 0 5px 3px inset;
            }
        `


export const Header = () => {
    return (
        <>
            <NavEstilizado>
                <img src="/img/logo.png" alt="Logo Alura Flix"/>
                <div>
                    <Link to={'/'}><BotonEstilizado>HOME</BotonEstilizado></Link>
                    <Link to={'/agregar'}><BotonEstilizado>NUEVO VIDEO</BotonEstilizado></Link>
                    <Link to={'/agregarcategoria'}><BotonEstilizado>AGREGAR CATEGORIA</BotonEstilizado></Link>
                </div>
            </NavEstilizado>
        </>
    )
}