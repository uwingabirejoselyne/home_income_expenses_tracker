import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
:root{
  --primary-color:#22260;
  --primary-color:'color:rgba(34,34,96,.6)';
  --primary-color:'color:rgba(34,34,96,.4)';
  --color-grey:#aaa;
  --primary-accent:#f56692;
  --primary-delete:#ff0000;
}
`;
