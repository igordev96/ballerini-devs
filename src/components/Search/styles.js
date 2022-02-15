import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSearch = styled(motion.form)`
  .inputField {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    height: 3rem;
    width: 18rem;
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
