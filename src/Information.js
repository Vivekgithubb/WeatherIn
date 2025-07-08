import styled from "styled-components";
import SplitText from "./react-Bits/SplitText";
const Img = styled.img`
  height: 130px;
  width: 130px;
`;
const Div = styled.div`
  /* background-color: aliceblue; */
  display: grid;
  grid-template-rows: 50% 50%;

  flex-direction: column;
  align-items: center;
  margin-left: 25px;
  height: 100%;
  width: 50%;
  position: relative;
  /* border: 1px solid black; */
`;
const H1 = styled.h1`
  color: white;
  font-size: 23px;
  font-family: monospace;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const H2 = styled.h1`
  font-size: 20px;
`;

function Information({ location, current }) {
  return (
    <Div>
      <div className="text-xl w-full text-zinc-400  h-fit font-mono flex flex-col justify-center items-center">
        <Img src={current.condition.icon} alt="Weather emoji" />
        {current.condition.text}
      </div>
      <div>
        <div className="grid grid-row-2 grid-cols-2 justify-center items-center">
          <H1>
            <SplitText
              text="Precipitation"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <H2>
              <SplitText
                text={`${current.precip_mm}(mm)`}
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </H2>
          </H1>
          <H1>
            <SplitText
              text="Gust Speed"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <H2>
              <SplitText
                text={`${current.gust_kph}(Km/h)`}
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </H2>
          </H1>
          <H1>
            <SplitText
              text="Cloud"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />{" "}
            <H2>
              {" "}
              <SplitText
                text={`${current.cloud}`}
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </H2>
          </H1>
          <H1>
            {" "}
            <SplitText
              text="visibility"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <H2>
              {" "}
              <SplitText
                text={`${current.vis_km}(Km)`}
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </H2>
          </H1>
        </div>

        <div className="flex flex-row justify-around items-center m-7"></div>
      </div>
    </Div>
  );
}

export default Information;
