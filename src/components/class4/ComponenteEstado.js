import { useEffect, useState } from 'react'

// snippet rafce
const ComponenteEstado = ({nombre}) => {

  const [contador, setContador] = useState(0)

  useEffect( () => {
      console.log('se ejecutó el efecto');
      return () => {
          console.log('Limpieza al unmount');
       }
  }, [contador] )

  const sumarHandler = () => { 
    setContador( contador + 1 )
  }

  const restarHandler = () => { 
    setContador( contador - 1 )
  }

  console.log('render de ComponenteEstado');

  return (
    <>
      <div>ComponenteEstado</div>
      Total: {contador}
      <br></br>
      {/* <button onClick={() => {setContador(3)} }> + </button> */}
      <button onClick={restarHandler}> - </button>
      <button onClick={sumarHandler}> + </button>
    </>
  )
}

export default ComponenteEstado