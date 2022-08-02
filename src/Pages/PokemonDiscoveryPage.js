import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PokemonBlock from "../components/PokemonBlock";
const PokemonDiscoveryPage = () => {
  const [pokeList, setPokeList] = useState(null);
  const [filter, setFilter] = useState(" ");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      console.log(response.data.results);
      setPokeList(response.data.results);
    };
    getPokemons();
    if (params.filter) {
      setFilter(params.filter);
      console.log(params.filter);
    } else {
      setFilter("");
    }
  }, []);
  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="pokename"
          value={filter}
          onChange={updateFilter}
        />
      </form>

      {pokeList ? (
        pokeList
          .filter((pokeObj) => pokeObj.name.startsWith(filter))
          .map((pokeObj, i) => <PokemonBlock key={i} name={pokeObj.name} />)
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};
export default PokemonDiscoveryPage;
