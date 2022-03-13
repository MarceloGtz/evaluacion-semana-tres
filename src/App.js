import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import SearchBox from "./components/SearchBox";
import CharacterList from "./components/CharacterList";
import LocationInfo from "./components/LocationInfo";

function App() {
  // En location se va a guardar la respuesta de la API
  const [location, setLocation] = useState({});

  // Peticion que da location en random al iniciar la app
  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocation(res.data));
  }, []);
  console.log(location)

  // Se pasa la prop setLocation a SearchBox
  return (
    <div className="App">
      <header className="Hero"></header>
      <LocationInfo location={location}/>
      <SearchBox setLocation={setLocation} />
      <CharacterList characters={location.residents} />
      <br />
      <br />
      <hr />
      <h3>Jesús Marcelo Gutiérrez Bravo</h3>
    </div>
  )
}

export default App;