import { StyledSearch } from "./styles";
import magnifying from "../../assets/magnifying.svg";

export default function Search() {
  return (
    <StyledSearch>
      <div className="inputField">
        <img src={magnifying} alt="lupa" />
        <input type="text" placeholder="Buscar" />
      </div>

      <button>Adicionar Desenvolvedor</button>
    </StyledSearch>
  );
}
