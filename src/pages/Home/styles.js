import { motion } from "framer-motion";
import styled from "styled-components";
import { green } from "../../globalstyles";

export const LandingText = styled(motion.section)`
  @media screen and (max-width: 1200px) {
    margin-top: 5rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 5rem;
  }

  .line {
    position: relative;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    /* margin-top: 1rem; */
    height: 2px;
    width: 4rem;
    background-color: ${green};
  }
`;

export const LandingPage = styled(motion.main)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 6rem;
  overflow-y: hidden;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  .blobs {
    position: absolute;
    z-index: -2;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .middle {
    left: 0;
    bottom: 50%;
    transform: translateY(50%);
  }

  .bottom {
    bottom: 0;
    left: 0;
  }
`;

export const DevelopingGuy = styled(motion.figure)`
  margin-right: -4rem;

  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.2;
    transform: translate(-50%, -50%);
    z-index: -2;
  }
`;
