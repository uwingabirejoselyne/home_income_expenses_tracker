import styled from "styled-components";
import avatar from './img/bg.png'; 
import { MainLayout } from "./styles/Layout";

function App() {
  return (
    <AppStyled bg={avatar}>
      <MainLayout>
        <h1>Hello</h1>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position:relative
`;

export default App;
