import Header from './Componentes/Header'
import Formulario from './Componentes/Formulario'
import DesFormulario from './Componentes/DesFormulario'
import NuevoInforme from './Componentes/NuevoInforme'
import { useState } from 'react'
import InfoRealizados from './Componentes/InfoRealizados'
import './css/App.css'
import TerFormulario from './Componentes/TerFormulario'
import Context from './Componentes/context'

function App() {
  
  return (
    <>
      <div className="App">
        <Header spanColor="text-gray-300" />
      </div>
      <div>
        <Context>
           <NuevoInforme />
        </Context>
      </div>
      <div className="mt-12 md:flex">
        <Formulario />
        <DesFormulario />
      </div>
      {/* <div>
          <InfoRealizados/>
      </div> */}
    </>
  )
}

export default App
