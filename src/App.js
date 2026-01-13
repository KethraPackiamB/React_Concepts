import "./App.css";
import { Counter } from "./Components/Counter";
import { ToggleTheme } from "./Components/ToggleTheme";
import { UserTable } from "./Components/UserTable";
import { PopUp } from "./WelcomeBackPopup/PopUp";
import { ShowPopUp } from "./WelcomeBackPopup/ShowPopUp";
import Layout from "./ContextAPI/Layout";
import { ThemeProvider } from "./ContextAPI/ThemeContext";
import CartList from "./ContextAPIwithUseReduser/CartList";
import { CartProvider } from "./ContextAPIwithUseReduser/CartContext";


function App() {
  return (
    <div>
      {/* <UserTable/> */}
      {/* <Counter/> */}
      {/* <ToggleTheme/> */}
      {/* <PopUp/> */}
      {/* <ShowPopUp /> */}


      {/* <ThemeProvider>
           <Layout/>
      </ThemeProvider> */}

      <CartProvider>
          <CartList/>
      </CartProvider>  
      
     
    </div>
  );
}

export default App;
