import { useEffect, useState } from "react";
import { Background, StyledForm, StyledInput, Buttons } from "./styles";

export default function Modal({
  setModalToggle,
  setDevs,
  devs,
  buttonType,
  editId = 0,
}) {
  const [temp, setTemp] = useState([]);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [position, setPosition] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    setTemp(devs.filter((dev) => dev.id === editId));
  }, [editId]);

  useEffect(() => {
    setName(temp[0] ? temp[0].name : "");
    setAvatar(temp[0] ? temp[0].avatar : "");
    setLinkedin(temp[0] ? temp[0].linkedin : "");
    setGithub(temp[0] ? temp[0].github : "");
    setPosition(temp[0] ? temp[0].position : "");
  }, [temp]);

  const exitModalHandler = (e) => {
    const elem = e.target;
    if (elem.classList.contains("shadow")) {
      setName("");
      setAvatar("");
      setLinkedin("");
      setGithub("");
      setPosition("");
      setTemp([]);
      setModalToggle(false);
    }
  };

  const addDev = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      avatar.trim() === "" ||
      position.trim() === "" ||
      linkedin.trim() === "" ||
      github.trim() === ""
    )
      return;
    setDevs([
      ...devs,
      {
        name,
        avatar,
        position,
        linkedin,
        github,
        id: crypto.randomUUID(),
      },
    ]);
    setName("");
    setAvatar("");
    setLinkedin("");
    setGithub("");
    setPosition("");
    setModalToggle(false);
  };

  const editDev = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      avatar.trim() === "" ||
      position.trim() === "" ||
      linkedin.trim() === "" ||
      github.trim() === ""
    )
      return;
    const tempDevs = [...devs];
    tempDevs.forEach((tempDev) => {
      if (tempDev.id === editId) {
        tempDev.name = name;
        tempDev.avatar = avatar;
        tempDev.github = github;
        tempDev.position = position;
        tempDev.linkedin = linkedin;
      }
    });
    setDevs([...tempDevs]);
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
        <h1>{buttonType == "add" ? "Adicionar" : "Editar"} Desenvolvedor</h1>
        <StyledInput>
          <label htmlFor="name">Nome:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            id="name"
            aria-required
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
          <button
            onClick={buttonType == "add" ? addDev : editDev}
            className={buttonType == "add" ? "add" : "edit"}
          >
            {buttonType == "add" ? "Adicionar" : "Editar"}
          </button>
        </Buttons>
      </StyledForm>
    </Background>
  );
}
