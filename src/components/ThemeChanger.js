import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../context/Context";

export default function ThemeChanger({setMode, setLinkColor}) {

  const mode = useContext(ThemeContext);

  function handleClick() {
    if (mode === "light") {
      setMode("dark");
      setLinkColor("links");
    } else {
      setMode("light");
      setLinkColor("")
    }
  }

  let content;

  if (mode === "light") {
    content = (
      <FontAwesomeIcon
        title="Go to Dark Mode"
        style={{ fontSize: "1.5rem", cursor: "pointer", width: "10%" }}
        onClick={handleClick}
        icon={faMoon}
      />
    );
  } else {
    content = (
      <FontAwesomeIcon
        title="Go to Light Mode"
        style={{ fontSize: "1.5rem", cursor: "pointer", width: "10%" }}
        onClick={handleClick}
        icon={faSun}
      />
    );
  }

  return(
    <>{content}</>
  )
}