import { useState } from 'react'
import Header from './components/Header'

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0); //State que Almacena el valor del presupuesto
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false); //State que valida si el presupuesto es valido para acceder a las funcionalidades

  return (
    <div>
      <Header 
        presupuesto = {presupuesto} //Se manda por props al componente Header
        setPresupuesto = {setPresupuesto} //Se manda por props al componente Header

        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />
    </div>
  )
}

export default App
