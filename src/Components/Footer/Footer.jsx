import styled from "styled-components";

const FooterEstilizado = styled.footer
    `
        width: 1280px;
        height: 220px;
        background-color: #111111;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top: 3px solid #2271d1;
        box-shadow: 0 -3px 2px #2271d1;
        
        img{
            width: 168px;
        }
        .alura{
            width: 80px;
            border-radius: 8px;
            box-shadow: 0 0 4px 2px #F5F5F5;
        }
        h2{
            color:#f5f5f5;
            text-shadow: 2px 2px 2px  #2271d1;
        }
    `

export const Footer = () => {
    return (
        <FooterEstilizado>
            <img src="/img/logo.png" alt="Logo"/>
            <h2>Desarrollado por Daniel Martin Bustos Grupo 6</h2>
            <img className={'alura'} src="/img/alura.jpg" alt=""/>
        </FooterEstilizado>
    )
}