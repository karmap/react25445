const EventsHome = () => {

  const buttonClass = 'flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'

  const buttonClickHandler = (event, num) => { 
    console.log('Hiciste click en el botón: ', num);
    console.log(event);
  }

  const otroButtonClickHandler = (event) => { 
      console.log(event);
  }

  const inputHandler = (e) => {
      console.log('Evento onInput');
      console.log(e.target.value);
  }

  return (
    <>
      <div>EventsHome</div>
      <button onClick={(event) => { buttonClickHandler(event, 10) }} className={buttonClass}>Haz click aquí</button>
      <button onClick={otroButtonClickHandler} className={buttonClass}>Otro botón</button>
      <input onInput={inputHandler} ></input>
    </>
  )
}
export default EventsHome