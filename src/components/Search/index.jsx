import { StyledSearch } from "./styles";
import magnifying from "../../assets/magnifying.svg";

export default function Search({ setModalToggle }) {
  return (
    <StyledSearch>
      <div className="inputField">
        <img src={magnifying} alt="lupa" />
        <input type="text" placeholder="Buscar" />
      </div>

      <button onClick={() => setModalToggle(true)}>
        Adicionar Desenvolvedor
      </button>
    </StyledSearch>
  );
}
