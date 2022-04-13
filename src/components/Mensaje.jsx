import React from 'react'

const Mensaje = ({children, tipo}) => { //Toma todos los elementos enviados desde NuevoPresupuesto y el tipo para setear la clase con la variable enviada
  return (
    <div className={`alerta ${tipo}`}>{children}</div> //Retorna el div con el mensaje seteado y la clase obtenida via props tipo, para modifique el CSS
  )
}

export default Mensaje