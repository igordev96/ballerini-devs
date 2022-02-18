import Card from "../../components/Card";
import { Container, Outer } from "./styles";
import { useCallback, useRef, useState } from "react";
import Modal from "../../components/Modal";

export default function DevDB({
  devs,
  setDevs,
  setButtonType,
  setModalToggle,
  setEditId,
  deleteRef,
}) {
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
              deleteRef={deleteRef}
              setEditId={setEditId}
              setButtonType={setButtonType}
              setDevs={setDevs}
              devs={devs}
              key={dev.id}
              id={dev.id}
              name={dev.name}
              avatar={dev.avatar}
              position={dev.position}
              githubLink={dev.github}
              linkedinLink={dev.linkedin}
              setModalToggle={setModalToggle}
            />
          ))}
        </Container>
      </Outer>
    </>
  );
}
