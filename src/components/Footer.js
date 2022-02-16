
// snnipet: rafce

const Footer = ( {name, action, children} ) => {

//   const onClickHandler = () => { 
//       console.log('hiciste click');
//    }

    console.log( children);

  const styles = {
      button: 'h-10 px-6 font-semibold rounded-md bg-black text-white'
  }

  return (
    <>
        {/* {children.map( e => 
            <div>{e}</div>
        )} */}
        <div>este es mi pie de página</div>
        <div>Espero que te haya gusta mi sitio {name}</div>
        <button className={styles.button} onClick={action}>Dale click aquí</button>
    </>
  )
}

export default Footer
