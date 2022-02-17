import { StyledCard, Links, Buttons, Container } from "./styles";
import github from "../../assets/githubDev.svg";
import linkedin from "../../assets/linkedinDev.svg";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Card({
  id,
  name,
  position,
  avatar,
  githubLink,
  linkedinLink,
}) {
  const [hover, setHover] = useState(false);

  return (
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
          <button className="edit">Editar</button>
          <button className="delete">Deletar</button>
        </Buttons>
      )}
    </Container>
  );
}
