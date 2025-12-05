import { useState } from "react";

export const useToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleState = () => {
    setIsOn((curr) => (curr === false ? true : false));
  };

  return { isOn, handleState };
};
