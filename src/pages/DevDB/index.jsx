import Card from "../../components/Card";
import { Container, Outer } from "./styles";
import { useCallback, useRef, useState } from "react";

export default function DevDB({ devs, setDevs }) {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  // const carouselRef = useCallback(
  //   (node) => {
  //     if (node !== null) {
  //       setWidth(node.scrollWidth - node.offsetWidth);
  //     }
  //   },
  //   [devs]
  // );
  return (
    <>
      <Outer ref={carouselRef}>
        <Container
          drag="x"
          dragConstraints={carouselRef}
          whileTap={{ cursor: "grabbing" }}
        >
          {devs.map((dev) => (
            <Card
              setDevs={setDevs}
              devs={devs}
              key={dev.id}
              id={dev.id}
              name={dev.name}
              avatar={dev.avatar}
              position={dev.position}
              githubLink={dev.github}
              linkedinLink={dev.linkedin}
            />
          ))}
        </Container>
      </Outer>
    </>
  );
}
