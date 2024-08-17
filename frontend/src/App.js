import styled from "styled-components";
import avatar from './img/bg.png'; 

function App() {
  return (
    <AppStyled bg={avatar}> 
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
`;

export default App;
