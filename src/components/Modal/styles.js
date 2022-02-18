import { motion } from "framer-motion";
import { darken } from "polished";
import styled from "styled-components";
import { yellow } from "../../globalstyles";

export const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const StyledForm = styled(motion.form)`
  height: 70vh;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
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
  width: 90%;
  flex-direction: column;
  font-family: "Maven Pro", sans-serif;
  font-size: 1.5rem;
  color: white;

  input {
    background-color: white;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 1.5rem;
    padding: 0 1rem;
    outline: none;
  }
`;

export const Buttons = styled(motion.div)`
  display: flex;
  gap: 3rem;

  button {
    font-size: 1.2rem;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    color: black;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }

  .edit {
    background-color: ${yellow};

    &:active {
      background-color: ${darken(0.1, yellow)};
    }
  }

  .cancel {
    background-color: white;

    &:active {
      background-color: ${darken(0.1, "rgb(255,255,255)")};
    }
  }
`;
