import { BrowserRouter } from "react-router-dom";
import { Formulario } from "../pages/UsuarioRegister.jsx";


function App(){
  return(
    <BrowserRouter>
    {<Formulario/>}
    </BrowserRouter>
  )
}
export default App