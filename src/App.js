import React, { useState, useEffect, lazy, Suspense } from "react";
import { ThemeContext } from "./context/Context";
// import ThemeChanger from "./components/ThemeChanger";
// import MobileMenu from "./components/MobileMenu";
// import Layout from "./layout/Layout";
// import Router from "./routes/Router";
import "./App.css";

const ThemeChanger = lazy(() => import("./components/ThemeChanger"));
const MobileMenu = lazy(() => import("./components/MobileMenu"));
const Layout = lazy(() => import("./layout/Layout"));
const Router = lazy(() => import("./routes/Router"));


export default function App() {
  const [mode, setMode] = useState("light");
  const [linkColor, setLinkColor] = useState("");
  const [state, setState] = useState(true);
  const [style, setStyle] = useState("");

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) {
      setMode(mode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  let classes = `App ${mode}`;

  return (
    <ThemeContext.Provider value={mode}>
      <div className={classes}>
        <Suspense fallback={<h3 style={{padding: "400px 0", textAlign: "center"}}>Loading....</h3>}>
        <header>
          <ThemeChanger
            mode={mode}
            setMode={setMode}
            linkColor={linkColor}
            setLinkColor={setLinkColor}
          />
          <Layout linkColor={linkColor} style={style} />
          <MobileMenu setState={setState} setStyle={setStyle} state={state} />
        </header>
        <main>
          <Router linkColor={linkColor} />
        </main>
        </Suspense>
        
      </div>
    </ThemeContext.Provider>
  );
}
