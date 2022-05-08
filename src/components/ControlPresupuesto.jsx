import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad)=>{
        return Number(cantidad).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div className="">
            <p>Grafica Aqui</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Budget:</span> {formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Available:</span> {formatearCantidad(0)}
            </p>
            <p>
                <span>Spent:</span> {formatearCantidad(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto