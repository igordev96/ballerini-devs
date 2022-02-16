import { createGlobalStyle } from "styled-components";

export const black = "#1d1d1d";
export const green = "#27ae60";
export const darkgrey = "#a9a9a9";
export const lightgrey = "#f9f9f9";
export const yellow = "#dbb801";
export const red = "#f42626";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${black};
    font-family: Overpass, sans-serif;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  h1 {
    font-size: 3rem;
    color: #d2d2d2;
    font-weight: 600;
  }

  h3 {
    font-size: 1.5rem;
    color: ${darkgrey};
    font-weight: 400;
  }

  button {
    background-color: ${green};
    color: white;
    border: none;
    outline: none;
    padding: 1rem 3.5rem 1rem 3.5rem;
    border-radius: 55px;
    font-size: 1.5rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

    &:hover {
      cursor: pointer;
    }
  }

  ::placeholder {
    color: #999;
    font-weight: 500;
  }
`;
