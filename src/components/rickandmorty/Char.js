const Char = ( {char} ) => {
  return (
      <>
        <div>{char.name}</div>
        <div> Especie: {char.species}</div>
        <img src={char.image} ></img>
      </>
  )
}
export default Char