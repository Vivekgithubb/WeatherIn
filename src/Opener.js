import styled from "styled-components";
import Waves from "./Waves";
import SplitText from "./react-Bits/SplitText";
import { useNavigate } from "react-router-dom";
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

const Div1 = styled.div`
  width: max-content;
  padding: 10px;
  border-radius: 20px;
  font-size: 60px;
  height: max-content;
  text-shadow: 2px 2px 5px white;
  /* background-color: aliceblue; */
`;
const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;
const Button = styled.button`
  box-shadow: 0 10px 25px -3px blue; /* shadow-blue-300/50 */
  border: 2px solid #3b82f6; /* ring-blue-500 */
  &:hover {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;
function Opener() {
  const navigate = useNavigate();
  //   const time = new Date().getHours();
  //   let now = "Morning";
  //   switch (time) {
  //     case time > "00":
  //       now = "Morning";
  //       break;
  //     case time > "12":
  //       now = "Afternoon";
  //       break;
  //     default:
  //       now = "Night";
  //       break;
  //   }
  return (
    <StyledLayout>
      <Background>
        <Waves
          lineColor="#fff"
          backgroundColor="#3452eb"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </Background>
      <Div>
        <SplitText
          text={`Hey There...Welcome`}
          className="text-8xl font-semibold text-center text-shadow-lg/30"
          delay={200}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <Button
          onClick={() => navigate("weatherin")}
          className="bg-white p-5 text-2xl font-mono rounded-full font-bold"
        >
          Click here to Check weather
        </Button>
      </Div>
    </StyledLayout>
  );
}

export default Opener;
