import styled from "styled-components";
import React, { useState } from "react";
import bg from './img/bg.png'; 
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  const[active,setActive] = useState(1)
  return (
    <AppStyled bg={bg}>
      <Orb/>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
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
