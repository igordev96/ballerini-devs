import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSearch = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  height: 3rem;
  gap: 2rem;

  button {
    width: 75%;
    padding-left: 2rem;
    padding-right: 2rem;
    align-self: flex-end;
    font-size: 1rem;
    font-family: "Maven Pro", sans-serif;
  }

  .inputField {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    height: 3rem;
    width: 100%;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 0.6rem;
    background-color: white;

    input {
      font-size: 1.5rem;
      width: 100%;
      height: 100%;
      border: none;
      background: none;
      outline: none;
    }
  }
`;