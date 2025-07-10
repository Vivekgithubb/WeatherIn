import styled from "styled-components";
import formatDate from "./formatDate";
import { LiaCompass, LiaWindSolid, LiaWaterSolid } from "react-icons/lia";
import { useGlobal } from "./GlobalContext";

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  height: 100%;
  width: 100%;
  /* background-color: aliceblue; */
`;

const WeatherBox = styled.div`
  /* background-color: #2563eb; */
  box-shadow: 0 10px 15px -3px rgba(147, 197, 253, 0.5); /* shadow-blue-300/50 */
  border: 2px solid #3b82f6; /* ring-blue-500 */
  border-radius: 0.5rem; /* rounded-lg */
  padding: 0.75rem; /* p-3 */
  width: 120%;
  height: 100%;
  color: white;
  font-family: monospace;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const TempRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const TempValue = styled.div`
  font-size: 3.75rem; /* text-3xl */
  font-weight: bold;
  font-family: monospace;
`;

const FeelsLike = styled.div`
  font-size: 13px;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  background-color: #22c55e; /* bg-green-500 */
  text-align: center;
  color: black;
  display: flex;
  align-items: center;
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: ${(props) =>
    props.unit === "c" ? "1px 1px 5px blue;" : "1px 1px 5px black;"};
  transition: 0.2s ease-in-out;
`;
const Button = styled.button`
  background-color: ${(props) => (props.unit === "c" ? "black" : "white")};
  padding: 5px;
  padding-left: 7px;
  width: 220px;
  padding-right: 7px;
  border-radius: 9px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 1px 1px 5px blue;
  box-shadow: ${(props) =>
    props.unit === "c" ? "1px 1px 5px blue;" : "1px 1px 5px black;"};
  color: ${(props) => (props.unit === "c" ? "white" : "black")};
  transition: 0.2s ease-in-out;
`;
const SecondBox = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 90% 10%;
  font-family: monospace;
  font-size: 20px;
`;

const DivBox = styled.h1`
  margin-top: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

function Grid({ location, current }) {
  const { button, setButton } = useGlobal();
  function handleClick() {
    setButton((button) => (button === "c" ? "F" : "c"));
  }
  const temp = button === "c" ? current.temp_c : current.temp_f;
  const tempFeels = button === "c" ? current.feelslike_c : current.feelslike_f;
  return (
    <StyledGrid>
      <WeatherBox>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl">
            {location.name}, {location.country}
          </h1>
        </div>

        <TempRow>
          <TempValue>
            {temp}&deg;{button === "c" ? "C" : "F"}
          </TempValue>

          {/* <Img src={current.condition.icon} alt="Weather emoji" /> */}
        </TempRow>
        <div className="flex flex-row justify-between">
          <FeelsLike>
            Feels Like {tempFeels}&deg;{button === "c" ? "C" : "F"}
          </FeelsLike>
          <div className="flex flex-row gap-2">
            <Button onClick={handleClick} unit={button}>
              {button === "c" ? "Fahrenheit" : "Celcius"}
            </Button>
          </div>
        </div>
      </WeatherBox>

      <div>
        <div className="font-mono tracking-tighter">
          <h1 className="text-2xl">{formatDate(location.localtime)}</h1>
          <h1>{location.region}</h1>
        </div>
        <SecondBox>
          <div>
            <DivBox>
              Wind Km/h
              <span>
                <LiaWindSolid style={{ fontSize: "1.5rem", color: "white" }} />
              </span>
            </DivBox>

            <DivBox>Wind Degree&deg;</DivBox>
            <DivBox>
              Wind Direction{" "}
              <span>
                <LiaCompass style={{ fontSize: "1.7rem", color: "white" }} />
              </span>
            </DivBox>
            <DivBox>
              Humidity{" "}
              <span>
                <LiaWaterSolid />
              </span>
            </DivBox>
          </div>
          <div>
            <DivBox>{current.wind_kph}</DivBox>
            <DivBox>{current.wind_degree}</DivBox>
            <DivBox>{current.wind_dir}</DivBox>
            <DivBox>{current.humidity}</DivBox>
          </div>
        </SecondBox>
      </div>
    </StyledGrid>
  );
}

export default Grid;
