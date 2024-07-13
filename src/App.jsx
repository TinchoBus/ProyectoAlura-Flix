import {Header} from "./Components/Header/Header.jsx";
import {EstilosGlobales} from "./Components/EstilosGlobales/EstilosGlobales.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./Pages/Home/Home.jsx";
import {AgregarVideo} from "./Pages/AgregarVideo/AgregarVideo.jsx";
import {AgregarCategoria} from "./Pages/AgregarCategoria/AgregarCategoria.jsx";
import {Error404} from "./Pages/Error404/Error404.jsx";


function App() {
    return (
        <>
            <Router>
                <EstilosGlobales/>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/agregar'} element={<AgregarVideo url={'/videos'}/>}/>
                    <Route path={'/agregarcategoria'} element={<AgregarCategoria/>}/>
                    <Route path={'*'} element={<Error404/>} />
                </Routes>
                <Footer/>
            </Router>





            {/*<EstilosGlobales/>*/}
            {/*<Header/>*/}
            {/*<AgregarVideo/>*/}
            {/*<Footer/>*/}
        </>
    )
}

export default App
