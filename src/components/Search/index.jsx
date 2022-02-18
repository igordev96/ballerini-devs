import { StyledSearch } from "./styles";
import magnifying from "../../assets/magnifying.svg";
import { useEffect, useState } from "react";

export default function Search({
  setModalToggle,
  devs,
  setFilteredDevs,
  setButtonType,
}) {
  const [search, setSearch] = useState("");

  useEffect(() => filtering(), [search]);

  const filtering = () => {
    if (search == "" || search == " ") {
      setFilteredDevs([...devs]);
    } else {
      setFilteredDevs(
        devs.filter((dev) => {
          if (dev.name.toLowerCase().includes(search.toLowerCase())) {
            return dev;
          }
        })
      );
    }
  };

  return (
    <StyledSearch>
      <div className="inputField">
        <img
          onClick={() => setFilteredDevs([...devs])}
          src={magnifying}
          alt="lupa"
        />
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Buscar"
        />
      </div>

      <button
        onClick={() => {
          setButtonType("add");
          setModalToggle(true);
        }}
      >
        Adicionar Desenvolvedor
      </button>
    </StyledSearch>
  );
}
