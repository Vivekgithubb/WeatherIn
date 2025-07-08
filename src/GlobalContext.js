import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import Fetcher from "./Fetcher";
import AlertFetcher from "./HistoryFetcher";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [city, setCity] = useState("Mangalore");
  const [cityData, setCityData] = useState();
  const [historyData, setHistoryData] = useState();
  const [button, setButton] = useState("c");
  useEffect(() => {
    async function SetCity() {
      try {
        const data = await Fetcher(city);
        setCityData(data);
      } catch (err) {
        console.log(err);
      }
    }
    SetCity();
  }, [city]);
  useEffect(() => {
    async function SetAlert() {
      try {
        const HistoryData = await AlertFetcher(city);
        setHistoryData(HistoryData);
        console.log(HistoryData);
      } catch (err) {
        console.log(err);
      }
    }
    SetAlert();
  }, [city]);

  return (
    <GlobalContext.Provider
      value={{
        city,
        historyData,
        setHistoryData,
        setCity,
        cityData,
        setCityData,
        button,
        setButton,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export function useGlobal() {
  return useContext(GlobalContext);
}
