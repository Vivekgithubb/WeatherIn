import { createGlobalStyle } from "styled-components";
import AppLayout from "./AppLayout";
import "./App.css";
import { GlobalProvider } from "./GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Opener from "./Opener";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    /* overflow-x: hidden; */
    overflow: hidden; /* Optional: hide scrollbars if you don’t need them */
  }
`;

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Opener />} />
          <Route path="/weatherin" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
