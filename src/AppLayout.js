import styled from "styled-components";
import Silk from "./Silk";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const StyledLayout = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1; /* Send it behind the content */
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Background>
        <Silk
          speed={5}
          scale={1}
          color="#5c61ff"
          noiseIntensity={1.0}
          rotation={0}
        />
      </Background>
      <Nav />
      <Main />
    </StyledLayout>
  );
}

export default AppLayout;
