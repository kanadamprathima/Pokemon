import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetailsPage = () => {
  const routeParams = useParams();
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const getPokemonDetails = async () => {
      const pokemonResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${routeParams.name}`
      );
      console.log(pokemonResponse.data);
      setPokemon(pokemonResponse.data);
    };
    getPokemonDetails();
  }, []);
  return (
    <div>
      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          {<img src={pokemon.sprites.front_shiny} alt="pic" />}
          <p>weight :{pokemon.weight}hectograms</p>
          <p>
            Types:{" "}
            {pokemon.types.map((typeObj) => (
              <span>{typeObj.type.name}</span>
            ))}
          </p>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};
export default PokemonDetailsPage;
