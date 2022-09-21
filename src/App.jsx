import Header from "./components/Header"
import Formulario from "./components/Formulario"
import PacientesListado from "./components/PacientesListado"
import { useState } from "react"

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-12 mt-6">
      <Header />
      <div className="md:flex mt-12">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}/>
        <PacientesListado 
        pacientes={pacientes} />
      </div>
     
    </div>
  )
}

export default App
