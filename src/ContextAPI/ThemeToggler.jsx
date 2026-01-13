import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggler = () => {

    const {theme,toggleTheme} = useContext(ThemeContext);

   
    return(
        <div>
            <h1>Theme Toggler</h1>
            <button onClick={toggleTheme}>Click to change {theme === "light" ? "dark" : "Light"}</button>
        </div>
    )
}
export default ThemeToggler;