import styled from "styled-components";
import React, { useState } from "react";
import bg from './img/bg.png'; 
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Expenses from "./Components/Expenses/Expenses";
import Income from "./Components/Incomes/Income";
import { useGlobalContext } from "./Context/globalContext";

function App() {
  const[active,setActive] = useState(1)
  const global = useGlobalContext()  
  const displayData =() =>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Income/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/> 
    }
  }
  return (
    <AppStyled bg={bg}>
      <Orb/>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <div className="main-content">
          {displayData()}
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
