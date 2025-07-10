import styled from "styled-components";

const Img = styled.img`
  height: 119px;
  position: relative;
  bottom: 54px;
  left: 41px;
`;
const Div = styled.div`
  box-shadow: 1px 10px 25px -5px black; /* shadow-blue-300/50 */
  border: 2px solid #3b82f6; /* ring-blue-500 */
`;

function SideContent({ forecastdata, forecasthour, index }) {
  return (
    <Div className="h-40 border relative font-mono bg-white bg-opacity-10 backdrop-blur-x  border-black rounded-lg p-4 text-white">
      <div className="flex flex-row justify-between w-full ">
        <div>
          Sunrise<h1>{forecastdata.astro.sunrise}</h1>
        </div>
        <div>
          Sunset <h1> {forecastdata.astro.sunset}</h1>
        </div>
      </div>
      <div className="flex justify-between items-center flex-row w-full">
        <div>
          <h1>Time</h1>
          <h1>
            {new Date(forecasthour.time).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </h1>
        </div>

        <Img src={forecastdata.day.condition.icon} alt="WeatherImg" />
        <h1 className="flex justify-end flex-col items-end">
          <p>Condition</p>
          {forecasthour.condition.text}
        </h1>
      </div>
    </Div>
  );
}

export default SideContent;
