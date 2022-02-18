import { StyledCard, Links, Buttons, Container } from "./styles";
import github from "../../assets/githubDev.svg";
import linkedin from "../../assets/linkedinDev.svg";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Modal from "../Modal";

export default function Card({
  id,
  name,
  position,
  avatar,
  githubLink,
  linkedinLink,
  devs,
  setDevs,
  setButtonType,
  setModalToggle,
  setEditId,
  deleteRef,
}) {
  const [hover, setHover] = useState(false);

  const deleteDev = (id) => {
    setDevs(devs.filter((dev) => dev.id !== id));
  };

  return (
    <>
      <Container
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <StyledCard>
          <img className="user" src={avatar} alt="avatar" />
          <div className="line"></div>
          <h1>{name}</h1>
          <p>{position}</p>
          <Links>
            <a href={githubLink} target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href={linkedinLink} target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
            <motion.button>Ver mais</motion.button>
          </Links>
        </StyledCard>
        {hover && (
          <Buttons>
            <button
              onClick={() => {
                setButtonType("edit");
                setModalToggle(true);
                setEditId(id);
              }}
              className="edit"
            >
              Editar
            </button>
            <button
              ref={deleteRef}
              onClick={() => deleteDev(id)}
              className="delete"
            >
              Deletar
            </button>
          </Buttons>
        )}
      </Container>
    </>
  );
}
