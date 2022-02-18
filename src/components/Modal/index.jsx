import { useState } from "react";
import { Background, StyledForm, StyledInput, Buttons } from "./styles";

export default function Modal({ setModalToggle, setDevs, devs }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [position, setPosition] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const exitModalHandler = (e) => {
    const elem = e.target;
    if (elem.classList.contains("shadow")) {
      setModalToggle(false);
    }
  };

  const addDev = (e) => {
    e.preventDefault();
    setDevs([
      ...devs,
      {
        name,
        avatar,
        position,
        linkedin,
        github,
      },
    ]);
    setName("");
    setAvatar("");
    setLinkedin("");
    setGithub("");
    setPosition("");
    setModalToggle(false);
  };

  return (
    <Background onClick={exitModalHandler} className="shadow">
      <StyledForm>
        <h1>Adicionar Desenvolvedor</h1>
        <StyledInput>
          <label htmlFor="name">Nome:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            id="name"
            required
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="avatar">Avatar:</label>
          <input
            onChange={(e) => {
              setAvatar(e.target.value);
            }}
            value={avatar}
            type="text"
            id="avatar"
            required
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="position">Cargo:</label>
          <input
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            value={position}
            type="text"
            id="position"
            required
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="github">GitHub:</label>
          <input
            onChange={(e) => {
              setGithub(e.target.value);
            }}
            value={github}
            type="text"
            id="github"
            required
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="linkedin">LinkedIn:</label>
          <input
            onChange={(e) => {
              setLinkedin(e.target.value);
            }}
            value={linkedin}
            type="text"
            id="linkedin"
            required
          />
        </StyledInput>
        <Buttons>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="cancel shadow"
          >
            Cancelar
          </button>
          <button onClick={addDev} className="add">
            Adicionar
          </button>
        </Buttons>
      </StyledForm>
    </Background>
  );
}
