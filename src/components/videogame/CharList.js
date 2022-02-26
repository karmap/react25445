import { useEffect, useState } from "react"
import CharListCard from "./CharListCard"

const charsList = [
    {id: 1, name:'Goku', life: 10, power:90},
    {id: 2, name:'Vegeta', life: 9, power:80},
    {id: 3, name:'Trunks', life: 8, power:70},
    {id: 4, name:'Yamcha', life: 11, power:50},
    {id: 5, name:'Cell', life: 10, power:150},
]

const CharList = () => {

  const [chars, setChars] = useState([])

  useEffect(() => {
    getChars()
  }, [])
  
  
  const getChars = () => { 
    const getCharsPromise = new Promise( (resolve, reject) =>{
        setTimeout(() => {
            resolve(charsList)
        }, 2000);
    })

    getCharsPromise.then(
        data => {
            setChars(data)
            console.log(data);
        }
    )
  }

  return (
    <div>
        <h1>Lista de personajes</h1>
        {chars.map((c) => 
            <CharListCard key={c.id} char={c}></CharListCard>
        )}
    </div>
  )
}
export default CharList