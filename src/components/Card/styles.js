import { motion } from "framer-motion";
import styled from "styled-components";
import { darken } from "polished";
import { green, lightgrey, yellow, red, black } from "../../globalstyles";

export const StyledCard = styled(motion.div)`
  background-color: ${lightgrey}26;
  width: 21rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  transition: 200ms;

  &:hover {
    box-shadow: 0 0 12px ${green};
    transform: translateY(-1rem);
  }

  h1 {
    margin-top: 1rem;
    font-family: "Maven Pro", sans-serif;
    font-weight: 500;
    font-size: 2rem;
    color: white;
  }

  p {
    font-family: "Maven Pro", sans-serif;
    font-size: 1rem;
    color: white;
  }

  .user {
    margin-bottom: 2rem;
    width: 12rem;
    border-radius: 50%;
    border: 4px solid ${green};
  }

  .line {
    height: 3px;
    width: 40%;
    background-color: ${green};
  }
`;

export const Links = styled(motion.div)`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    cursor: pointer;
    width: 2rem;
    height: 100%;
  }
  button {
    padding: 1rem 2.5rem;
  }
`;

export const Buttons = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    font-size: 1.5rem;
    color: black;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }

  .edit {
    background-color: ${yellow};

    &:active {
      background-color: ${darken(0.1, yellow)};
    }
  }

  .delete {
    background-color: ${red};

    &:active {
      background-color: ${darken(0.1, red)};
    }
  }
`;

export const Container = styled(motion.div)`
  position: relative;
  display: grid;
  place-items: center;
  height: 37rem;
`;
