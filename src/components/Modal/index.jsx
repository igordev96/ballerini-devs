import { Background, StyledForm, StyledInput, Buttons } from "./styles";

export default function Modal() {
  return (
    <Background>
      <StyledForm>
        <h1>Adicionar Desenvolvedor</h1>
        <StyledInput>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" />
        </StyledInput>
        <StyledInput>
          <label htmlFor="avatar">Avatar:</label>
          <input type="text" id="avatar" />
        </StyledInput>
        <StyledInput>
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" />
        </StyledInput>
        <StyledInput>
          <label htmlFor="github">GitHub:</label>
          <input type="text" id="github" />
        </StyledInput>
        <StyledInput>
          <label htmlFor="linkedin">LinkedIn:</label>
          <input type="text" id="linkedin" />
        </StyledInput>
        <Buttons>
          <button className="cancel">Cancelar</button>
          <button className="add">Adicionar</button>
        </Buttons>
      </StyledForm>
    </Background>
  );
}
