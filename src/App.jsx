import React, { useState } from "react";
import AppTitle from "./components/AppTitle";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import "./App.css";

export default function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      try {
        const result = eval(calVal);
        setCalVal(result);
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue);
    }
  };

  const handleKeyDown = (event) => {
    console.log(event.key);
    // You can add your logic here to handle the key events
  };

  return (
    <>
      <AppTitle />
      <div className="calculator">
        <Display displayValue={calVal} />
        <ButtonsContainer
          handleOnClick={onButtonClick}
          handleKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
}
