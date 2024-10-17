import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sobre from "./componentes/Sobre.jsx";
import Home from "./componentes/Home.jsx";
import Vantagens from "./componentes/Vantagens.jsx";
import Footer from "./componentes/Footer.jsx";

function App() {
   return (
      <>
         <Home />
         <Sobre />
         <Vantagens />
      </>
   );
}

export default App;
