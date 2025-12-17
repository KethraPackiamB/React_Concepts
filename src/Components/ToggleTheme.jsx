import { useToggle } from "../utils/useToggle";
import { Button } from "react-bootstrap";

export const ToggleTheme = () => {
  const { isOn, handleState } = useToggle();

  const style = {
    backgroundColor: isOn ? "black" : "white",
    color: isOn ? "white" : "black",
    height: "80vh",
  };

  return (
    <div style={style}>
      <center>
        <h1>{isOn ? "Dark Theme" : "Light Theme"}</h1>
        <button onClick={handleState}>{isOn ? "On Light" : "On Dark"}</button>
      </center>
    </div>
  );
};
