import { useEffect, useState } from "react";
import styled from "styled-components";
import Fetcher from "./Fetcher";
import SideBar from "./SideBar";
import Grid from "./Grid";
import Footer from "./Footer";
import Information from "./Information";
import { useGlobal } from "./GlobalContext";

const StyledMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const StyledBox = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid white; */
  width: 450px;
  height: 60vh;
  color: antiquewhite;
  border-radius: 7px;
  padding: 5px;
  margin: 20px;
  /* margin-left: 50px; */
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
`;
const StyledGridLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 300px; // adjust this height
  gap: 10px;
  padding: 10px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin-bottom: 50px;
  overflow-x: auto;
  overflow-y: hidden;
`;

const Div2 = styled.div`
  /* border: 1px solid black; */
  grid-column: 1 / span 2; // ✅ Full width
  grid-row: 2;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  max-height: 60vh; /* Adjust based on space */
  padding: 10px;
  margin-right: 10px;
  border-radius: 8px;
  width: 100%;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;
const ScrollableSidebar = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  margin-right: 10px;
  /* background-color: #f8fafc; Tailwind's slate-50 */
`;

function Main() {
  const { cityData } = useGlobal();
  console.log(cityData);
  if (!cityData) return <h1>Loading weatherapi</h1>;
  const { location, current } = cityData;
  return (
    <StyledMain>
      <StyledGridLayout>
        <div className=" flex flex-row justify-evenly items-center gap-3 ">
          <StyledBox>
            <Grid location={location} current={current} />
          </StyledBox>
          <Information location={location} current={current} />
        </div>

        <ScrollableSidebar>
          <SideBar />
        </ScrollableSidebar>
        <Div2 className="flex flex-row gap-5 mx-10 h-full ">
          <Footer />
        </Div2>
      </StyledGridLayout>
    </StyledMain>
  );
}

export default Main;
