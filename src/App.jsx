import React, { useState, useEffect } from "react";
import AppTitle from "./components/AppTitle";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import "./App.css";

const App = () => {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "=" || buttonName === "Enter") {
      try {
        setCalVal((prevValue) => {
          console.log(prevValue); // Log the previous value
          const result = eval(prevValue);
          return result.toString(); // Convert result to string before setting state
        });
      } catch (error) {
        setCalVal("Error");
      }
    } else if (buttonName === "Backspace") {
      setCalVal((prevValue) => prevValue.slice(0, -1));
    } else if (buttonName === "C") {
      setCalVal("");
    } else {
      setCalVal((prevValue) => prevValue + buttonName);
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    const validKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "=",
      "Enter",
      "Backspace",
      "C",
      "+",
      "-",
      "/",
      "*",
    ];
    if (validKeys.includes(key)) {
      onButtonClick(key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <AppTitle />
      <div className="calculator">
        <Display displayValue={calVal} />
        <ButtonsContainer handleOnClick={onButtonClick} />
      </div>
    </>
  );
};

export default App;
