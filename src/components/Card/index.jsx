import { StyledCard, Links } from "./styles";
import github from "../../assets/githubDev.svg";
import linkedin from "../../assets/linkedinDev.svg";

export default function Card() {
  return (
    <StyledCard>
      <img
        className="user"
        src="https://avatars.githubusercontent.com/u/91806111?v=4"
        alt="avatar"
      />
      <div className="line"></div>
      <h1>John Doe</h1>
      <p>Software Engineer Developer</p>
      <Links>
        <img src={github} alt="github" />
        <img src={linkedin} alt="linkedin" />
        <button>Ver mais</button>
      </Links>
    </StyledCard>
  );
}
