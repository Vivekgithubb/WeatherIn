import { useEffect, useState } from "react";
import styled from "styled-components";
import Fetcher from "./Fetcher";
import { useGlobal } from "./GlobalContext";

const UL = styled.ul`
  display: flex;
  gap: 37%;
  padding: 10px;
  align-items: center;
  list-style-type: none;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px black;
`;
const LI = styled.li`
  font-size: 35px;
  font-weight: bolder;
  color: black;
  font-family: monospace;
  color: white;
`;
const Input = styled.input`
  border: 1px solid black;
  height: 30px;
  border-radius: 20px;
  padding: 8px;
  font-size: 15px;
  font-family: monospace;
`;

function Nav() {
  const { setCity, city } = useGlobal();

  return (
    <UL className=" bg-white bg-opacity-10 backdrop-blur-x  border-black rounded-lg">
      <LI>WeatherIn</LI>
      <Input
        type="text"
        name="search"
        value={city}
        placeholder="Search..."
        onChange={(e) => setCity(e.target.value)}
      />
    </UL>
  );
}

export default Nav;
