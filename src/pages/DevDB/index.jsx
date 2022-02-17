import Card from "../../components/Card";
import Modal from "../../components/Modal";
import { Container, Outer } from "./styles";
import DevUsers from "../../util";
import { useCallback, useState } from "react";

export default function DevDB() {
  const [devs, setDevs] = useState(DevUsers());
  const [width, setWidth] = useState(0);

  const carouselRef = useCallback(
    (node) => {
      if (node !== null) {
        setWidth(node.scrollWidth - node.offsetWidth);
      }
    },
    [devs]
  );
  return (
    <>
      <Outer ref={carouselRef}>
        <Container
          drag="x"
          dragConstraints={{ right: width, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {devs.map((dev) => (
            <Card
              key={crypto.randomUUID()}
              id={crypto.randomUUID()}
              name={dev.name}
              avatar={dev.avatar}
              position={dev.position}
              githubLink={dev.github}
              linkedinLink={dev.linkedin}
            />
          ))}
        </Container>
      </Outer>
      <Modal />
    </>
  );
}
