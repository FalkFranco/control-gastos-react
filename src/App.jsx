import { useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {
  
  const [presupuesto, setPresupuesto] = useState(0); //State que Almacena el valor del presupuesto
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false); //State que valida si el presupuesto es valido para acceder a las funcionalidades

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = ()=>{
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }



  const guardarGasto = gasto =>{
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
  }

  return (
    <div className={modal && 'fijar'}>
      <Header 
        presupuesto = {presupuesto} //Se manda por props al componente Header
        setPresupuesto = {setPresupuesto} //Se manda por props al componente Header

        isValidPresupuesto = {isValidPresupuesto} //Validador del presupuesto valido
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />

      {isValidPresupuesto && ( // Si el presupuesto es valido
        <>
          <main>
            <ListadoGastos 
              gastos = {gastos}
            />
          </main>
            <div className="nuevo-gasto">
              <img 
                src={IconoNuevoGasto}  //Se inseta un imagen con el icono de +
                alt="Icono nuevo Gasto" 
                onClick={handleNuevoGasto} // OnClick para ejecutar un evento de agregar gasto
              />
          </div>
        </>
      )}

      {modal && <Modal 
                  setModal = {setModal}  
                  animarModal = {animarModal}
                  setAnimarModal = {setAnimarModal}
                  guardarGasto ={guardarGasto}
      />}
      
    </div>
  )
}

export default App
