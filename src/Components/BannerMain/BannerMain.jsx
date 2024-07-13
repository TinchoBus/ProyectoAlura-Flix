import styled from "styled-components";

const BannerEstilizado = styled.div
    `
        width: 1280px;
        max-width: 100%;
        height: 837px;
        margin: 0 auto;
        
        img {
            width: 1280px;
            height: 832px;
        }
    `


const BannerMainEstilizado = styled.main
    `   
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-image: url("/img/banner.png");
    `

const CardEstilizado = styled.div
    `
        margin-top: 200px;
        display: flex;
        padding: 0 40px;
        div{
            display: flex;
            flex-direction: column;
            align-items:start;
            justify-content: space-around;
            color: #F5F5F5;
            box-sizing: border-box;
        }
        div button{
            width: 296px;
            height: 92px;
            background-color: #6bd1ff;
            border-radius: 15px;
            border: none;
            font-size: 48px;
            font-weight: bolder;
            font-family: Roboto,serif;
            color: #F5F5F5;
        }
        div h4{
            font-family: Roboto,sans-serif;
            font-size: 46px;
            font-weight: normal;
        }
        img{
            width: 647px;
            height: 333px;
        }
        div p{
            font-size: 18px;
        }
    `


export const BannerMain = () => {
    return (
        <BannerEstilizado>
            <BannerMainEstilizado>
                <CardEstilizado>
                    <div>
                        <button>FRONT END</button>
                        <h4>Challenge React</h4>
                        <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la
                            resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación
                            React.</p>
                    </div>
                    <img src="/img/player.png" alt="Player"/>
                </CardEstilizado>
            </BannerMainEstilizado>
        </BannerEstilizado>

    )
}