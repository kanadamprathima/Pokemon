import { NavLink } from "react-router-dom";

const PokemonBlock = ({ name }) => {
  return (
    <div>
      <NavLink to={`/details/${name}`}>
        <p>{name}</p>
      </NavLink>
    </div>
  );
};
export default PokemonBlock;
