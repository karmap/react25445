import { useContext } from "react"

import CounterContext from "./context/counterContext"

const CounterCard = () => {

  const counter = useContext(CounterContext)

  return (
    <>
      <div className="border-2 border-red-600 m-2 p-5" >
        <div>Contador: {counter}</div>
      </div>
    </>
  )
}
export default CounterCard