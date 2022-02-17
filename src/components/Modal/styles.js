import { motion } from "framer-motion";
import { darken } from "polished";
import styled from "styled-components";

export const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledForm = styled(motion.form)`
  height: 70vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: rgba(52, 51, 51, 0.95);

  h1 {
    color: white;
    font-family: "Maven Pro", sans-serif;
    font-weight: 500;
    font-size: 2rem;
  }
`;

export const StyledInput = styled(motion.div)`
  display: flex;
  width: 60%;
  flex-direction: column;
`;

export const Buttons = styled(motion.div)`
  display: flex;
  gap: 3rem;

  button {
    font-size: 1.2rem;
    color: black;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }

  .cancel {
    background-color: white;

    &:active {
      background-color: ${darken(0.1, "rgb(255,255,255)")};
    }
  }
`;
