import styled from "styled-components";
import { motion } from "framer-motion";

export const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: auto;
  cursor: pointer;

  h3 {
    font-family: "Maven Pro", sans-serif;
    font-size: 2rem;
    color: white;
    user-select: none;
  }
`;

export const Header = styled(motion.header)`
  padding: 3rem 6rem 0 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    margin-right: auto;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
    }
  }
`;
