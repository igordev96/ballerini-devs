import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  gap: 5rem;
  cursor: grab;
`;

export const Outer = styled(motion.div)`
  height: 91vh;
  margin: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
