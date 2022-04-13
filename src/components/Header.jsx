import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'


const Header = ({presupuesto, setPresupuesto, isValidPresupuesto , setIsValidPresupuesto}) => { // Se extrae el props entre { } para poder usarlo
  return (
    <header>
        <h1>EXPENSE PLANNER</h1>

        {isValidPresupuesto ? ( //Si el presupuesto es valido, cambia al control
            <p>Control Presupuesto</p>
        ) : ( //Si no lo es, muestra los errores y pide el ingreso de un presupuesto valido
            <NuevoPresupuesto //Se invoca el componente NuevoPresupuesto
                presupuesto = {presupuesto} //Se manda por props al componente Nuevo Presupuesto 
                setPresupuesto ={setPresupuesto}

                setIsValidPresupuesto = {setIsValidPresupuesto}
            />
        )}
        
    </header>
  )
}

export default Header