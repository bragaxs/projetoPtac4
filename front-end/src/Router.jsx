import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";      

function Routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Reservas" element={<Reservas/>}></Route>
                <Route path="/Mesas" element={<Mesas/>}></Route>
                <Route path="/CadastrarMesa" element={<CadastrarMesa/>}></Route>
                <Route path="/AtualizarMesa" element={<AtualizarMesa/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routes
