import formatDate from "./formatDate";
import styled from "styled-components";
import { useGlobal } from "./GlobalContext";

const Div = styled.div`
  box-shadow: 0 10px 15px -3px black; /* shadow-blue-300/50 */
  border: 2px solid #3b82f6; /* ring-blue-500 */
`;

const FeelsLike = styled.div`
  font-size: 10px;
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
const Condition = styled.div`
  font-size: 10px;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  background-color: blue; /* bg-green-500 */
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: ${(props) =>
    props.unit === "c" ? "1px 1px 5px blue;" : "1px 1px 5px black;"};
  transition: 0.2s ease-in-out;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
`;

function FooterContent({ cityData }) {
  const { location, current } = cityData;
  const { button } = useGlobal();
  if (!cityData) return null;
  const temp = button === "c" ? current.temp_c : current.temp_f;
  const tempFeels = button === "c" ? current.feelslike_c : current.feelslike_f;
  console.log(cityData);
  return (
    <Div className="border relative flex flex-col justify-around  bg-white bg-opacity-10 backdrop-blur-x text-white rounded-lg border-1 background-blur-md border-black w-full ">
      <div>
        <div className=" w-full flex p-3 font-mono flex-col justify-between items-start">
          <h1>
            <span className="text-xl">{location.name}</span>, {location.region}
          </h1>
          <h3 className="text-sm">{formatDate(location.localtime)}</h3>
        </div>
      </div>

      <div className="p-2  flex flex-row gap-20  items-center relative text-4xl font-mono">
        {temp}&deg;{button === "c" ? "C" : "F"}
        <div>
          <Img src={current.condition.icon} />
        </div>
      </div>
      <div className="flex flex-row items-center w-full ">
        <FeelsLike className="mx-1  font-mono ">
          Feels Like {tempFeels}&deg;{button === "c" ? "C" : "F"}
        </FeelsLike>
        <Condition className="mx-1 font-mono ">
          {current.condition.text}
        </Condition>
      </div>
    </Div>
  );
}

export default FooterContent;
