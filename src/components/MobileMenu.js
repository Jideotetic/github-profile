import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function MobileMenu({setState, setStyle, state}) {

  function handleClick() {
    if (state) {
      setState(false);
      setStyle("visible");
    } else {
      setState(true);
      setStyle("");
    }
  }

  let content;

  if (state) {
    content = (
      <FontAwesomeIcon
        className="icon"
        style={{ fontSize: "1.5rem", cursor: "pointer", width: "10%" }}
        onClick={handleClick}
        icon={faBars}
      />
    );
  } else {
    content = (
      <FontAwesomeIcon
        className="icon"
        style={{ fontSize: "1.5rem", cursor: "pointer", width: "10%" }}
        onClick={handleClick}
        icon={faXmark}
      />
    );
  }


  return (
    <>
    {content}
    </>
  )
}