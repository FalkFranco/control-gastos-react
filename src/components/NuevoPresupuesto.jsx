import { useState } from 'react';
import Mensaje from './Mensaje';


const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => { // Se extrae el props entre { } para poder usarlo

    const [mensaje, setMensaje] = useState(''); //Crea un nuevo state local ya que solo se utilizara en este componente


  const handlePresupuesto = (e)=>{
    e.preventDefault(); // Elimina la accion por defecto del formulario

    if(!presupuesto || presupuesto <= 0){ //Si no hay presupuetso o el presupuesto es es menor que 0
        setMensaje(`It's not valid`) // Setea el mensaje con un String de error
        return;
    }

    setMensaje(''); //Resetea el mensaje al ingresar un presupuesto valido (SE ELIMINA DEL STATE)
    setIsValidPresupuesto(true)
  }  

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} action="" className='formulario'>  {/*onSubmit escucha por el accionar del input submit*/}
            <div className="campo">
                <label htmlFor="">Define Budget</label>
                <input 
                type="number" 
                className='nuevo-presupuesto'
                placeholder='Añade tu presupuesto'
                value={presupuesto}
                onChange = { e => setPresupuesto(e.target.value)} /*onChange escucha por cualquier cambio del input, y ejecuta el Arrow funtion que setea el presupuesto con el valor ingresado en el input*/
                />
            </div>
            <input type="submit" 
            value="Add"/>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} {/*llama a la variable mensaje del props y al componenete Mensaje y envia via props la variable tipo = 'error'*/}
        </form>                                                     {/*Para que el componente lo reciba e ingrese esa variable como una clase */}
    </div>
  )
}

export default NuevoPresupuesto