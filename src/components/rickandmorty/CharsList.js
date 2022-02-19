import { useEffect, useState } from "react"
import Char from "./Char"

const CharsList = () => {

  const [chars, setChars] = useState([])

  useEffect( ()=>{
    getChars()
  }, [])

  const getChars = () => {
    const URL = 'https://rickandmortyapi.com/api/character'

    fetch(URL)
      .then( res => res.json() )
      .then( res => {
        console.log(res);
        setChars(res.results)
      })
  }

  return (
    <>
      <div>CharsList</div>
      {chars.map( c => <Char char={c} key={c.id}></Char>)}
    </>
  )
}
export default CharsList