import React, { useState } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

console.log(temaClaro, temaOscuro)

function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  };

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro }>
      <GlobalStyle />
      <BtnTema onClick={ toggleTema }>
        <SwitcherTema tema={ true }/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;