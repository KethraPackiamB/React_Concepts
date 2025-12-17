import { useEffect, useState } from "react";
import { PopUp } from "./PopUp";

export const ShowPopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowPopUp(true);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {showPopUp && (
        <PopUp
          onHide={() => {
            setShowPopUp(false);
          }}
        />
      )}
    </div>
  );
};
