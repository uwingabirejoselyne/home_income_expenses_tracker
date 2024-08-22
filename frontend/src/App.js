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
        <div className="main-content">
          <h1>Hello</h1>
        </div>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position:relative;

  .main-content {
    flex: 1;
    background: rgba(252, 246, 249, 0.78); 
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    padding: 2rem;
    h1{
    }
  }
`;

export default App;
