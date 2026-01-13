import { useContext } from "react";
import ThemeToggler from "./ThemeToggler";
import { ThemeContext } from "./ThemeContext";

const Layout = () => {

    const {theme} = useContext(ThemeContext);

    const style = {
        backgroundColor : theme === "light" ? "#fff" : "#000",
        color : theme === "light" ? "#000" : "#fff",
        padding : "20px",
    }

    return(
        <div style={style}>
            <h1>Layout</h1>
            <ThemeToggler/>
        </div>
    )
}
export default Layout;