import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonDetailsPage from "./Pages/PokemonDetailsPage";
import PokemonDiscoveryPage from "./Pages/PokemonDiscoveryPage";

function App() {
  return (
    <div className="App">
      <h1>POKEMON DISCOVERY APP</h1>
      <div className="navlinks">
        {/* <NavLink to="/">Home</NavLink>{" "} */}
        <NavLink to="/discover">Discoverypage</NavLink>{" "}
        <NavLink to="/details/:name">Detailspage</NavLink>
      </div>

      <Routes>
        <Route path="/discover" element={<PokemonDiscoveryPage />} />
        <Route path="/details/:name" element={<PokemonDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
