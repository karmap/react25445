import { CounterContextProvider } from "./components/contextos/context/counterContext";
import ContextosHome from "./components/contextos/ContextosHome";
// import EventsHome from "./components/events/EventsHome";
// import TiendaApp from "./components/tienda/TiendaApp";
// import VidegameApp from "./components/videogame/VidegameApp";

function App() {

  return (
    <CounterContextProvider>
      <ContextosHome/>
    </CounterContextProvider>
  );
}

export default App;
