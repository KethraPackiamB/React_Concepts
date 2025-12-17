import './App.css';
import { Counter } from './Components/Counter';
import { ToggleTheme } from './Components/ToggleTheme';
import { UserTable } from './Components/UserTable';
import { PopUp } from './WelcomeBackPopup/PopUp';
import { ShowPopUp } from './WelcomeBackPopup/ShowPopUp';

function App() {
  return (
    <div>
      {/* <UserTable/> */}
      {/* <Counter/> */}
      {/* <ToggleTheme/> */}
      {/* <PopUp/> */}
      <ShowPopUp/>
    </div>
  );
}

export default App;
