import { useEffect, useState } from 'react'

// snippet rafce
const ComponenteEstado = ({nombre}) => {

  const [contador, setContador] = useState(0)

  const productos = [
      {id: '1', name:'Macbook', description: '', stock:'3'},
      {id: '2', name:'Acer', description: '', stock:'5'},
      {id: '3', name:'Dell', description: '', stock:'6'},
      {id: '4', name:'Levono', description: '', stock:'8'}
  ]

  const nombres = [ 'Ana', 'Juan', 'Maria' ]

  useEffect( () => {
      getProducts()
      console.log('se ejecutó el efecto');
      return () => {
          console.log('Limpieza al unmount');
       }
  }, [] )

  const getProducts = () => { 
      const getProductsPromise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 5000);
      })

      getProductsPromise.then( response => {
          console.log(response);
      })
   }

//   const promesa = () => {
//       console.log('Inicia mi funcion con una promesa');

//       const miPromesa = new Promise( (resolve, reject) => {
//           const random = Math.random()
//           console.log('random: ', random);
//           if ( random < 0.5) {
//               reject('la promesa se rechazó')
//           } else {
//               resolve('la promesa se resolvió')
//           }
//       })

//       miPromesa.then( (res) => {
//           console.log(res);
//       }).catch( e => { 
//           console.log(e);
//       }).finally( () => {
//           console.log('Finally siempre se ejecuta al final');
//       })
//    }

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

      {nombres.map( (n, i) => <li key={i}><span>{n}</span></li>)}

      {productos.map( producto => <li key={producto.id}>{producto.name} - Stock: {producto.stock}</li> )}
    </>
  )
}

export default ComponenteEstado