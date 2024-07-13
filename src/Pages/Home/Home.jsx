import {BannerMain} from "../../Components/BannerMain/BannerMain.jsx";
import {Cards} from "../../Components/Cards/Cards.jsx";


export const Home = () => {


    return (
        <>
            <BannerMain/>
            <Cards url={'/videos'} url2={'/categorias'}/>
        </>
    )


}