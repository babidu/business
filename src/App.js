import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyled } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import About from "./Components/PagesComp/About";
import Contact from "./Components/PagesComp/Contact";
import Home from "./Components/PagesComp/Home";
import Products from "./Components/PagesComp/Products";
import Error from "./Components/PagesComp/Error";
import Navbar from "./Components/NavbarComp/Navbar";
import Footer from "./Components/PagesComp/Footer";
import TopButton from "./Components/PagesComp/TopButton";

const App = () => {
  const theme = {
    colors: {
      color: "#fff",
      heading: "rgb(24 24 29)",
      paraColor: "rgb(24 24 29)",
      boxShodow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      btnColor: "rgb(98 84 243)",
      footerBg: "#0a1435",
      smallTextColor: "#8490ff",
      normalBg: "rgb(247 247 247)"
    },
    responsive: {
      tabs: "998px",
      mobile: "786px",
      miniMobile: "498px"
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Products />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <TopButton />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
