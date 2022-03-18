// import { CounterContextProvider } from "./components/contextos/context/counterContext";
import ContextosHome from "./components/contextos/ContextosHome";
// import Condicional from "./components/redercondicional/Condicional";
import { CounterContextProvider } from "./components/contextos/context/counterContext";
// import CounterContainer from "./components/contextos/CounterContainer";
import PhoneListContainer from "./components/redercondicional/PhoneListContainer";
// import EventsHome from "./components/events/EventsHome";
// import TiendaApp from "./components/tienda/TiendaApp";
// import VidegameApp from "./components/videogame/VidegameApp";

function App() {

  return (
    // <PhoneListContainer/>
    <CounterContextProvider>
      <ContextosHome></ContextosHome>
    </CounterContextProvider>
  );
}

export default App;
