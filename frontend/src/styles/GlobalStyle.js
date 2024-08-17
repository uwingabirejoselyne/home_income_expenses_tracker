import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root {
    --primary-color: rgba(34, 34, 96, 1);
    --primary-color-light: rgba(34, 34, 96, 0.6);
    --primary-color-lighter: rgba(34, 34, 96, 0.4);
    --color-grey: #aaa;
    --primary-accent: #f56692;
    --primary-delete: #ff0000;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: black;
  }
`;

