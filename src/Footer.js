import { useEffect, useRef, useState } from "react";
import FooterContent from "./FooterContent";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import styled from "styled-components";
// import { useGlobal } from "./GlobalContext";

function Footer() {
  // const { cityData, setCityData } = useGlobal();
  const [newCities, setNewCities] = useState();
  const api_key = "9ea37ea7ea994d71915161824250607";
  const cities = [
    "Bangalore ",
    "Hyderabad",
    "Delhi",
    "Chennai",
    "Kochi",
    "Madikeri",
    "Kodaikanal",
    "Jaipur",
    "Kolkata",
  ];

  const scrollRef = useRef();
  function ScrollLeft() {
    scrollRef.current.scrollBy({ left: -900, behavior: "smooth" });
  }
  function ScrollRight() {
    scrollRef.current.scrollBy({ left: 900, behavior: "smooth" });
  }
  useEffect(() => {
    async function newCity() {
      try {
        const fetchedData = await Promise.all(
          // promise all waits till allthe results are arrived
          cities.map(async (city) => {
            const res = await fetch(
              `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`
            );
            const data = await res.json();
            console.log(data.current.condition.icon);
            return { city, data };
          })
        );
        setNewCities(fetchedData.filter(Boolean)); // removees any city with null value
      } catch (err) {
        console.log(err);
      }
    }
    newCity();
  }, []);
  return (
    <>
      <button onClick={ScrollLeft}>
        <FiChevronsLeft size={40} color="white" />
      </button>
      <div
        className=" flex flex-row gap-5 w-fit m-5 overflow-x-auto overflow-y-hidden space-x-4 "
        ref={scrollRef}
      >
        {newCities &&
          newCities.map((city, index) => (
            <FooterContent cityData={city.data} key={index} />
          ))}
      </div>
      <button onClick={ScrollRight}>
        <FiChevronsRight size={40} color="white" />
      </button>
    </>
  );
}

export default Footer;
