import { useEffect, useState } from "react"

const SpeciesList = () => {

  const [species, setSpecies] = useState([])

  useEffect( () => { 
    getSpecies()
  }
  , [])

  const getSpecies = () => {
    const URL = 'https://swapi.dev/api/species'
    fetch(URL)
      .then( (response) => { return response.json() } )
      .then( (data) => { 
          console.log(data);
          setSpecies(data.results)
      })
  }

  return (
    <div>
        {species.map( s =>
            <h3 key={s.url}>{s.name}</h3>
        )}
    </div>
  )
}
export default SpeciesList