import React from "react";
import Button from "./Button";
const TypeRacer = (props) => {
  const {
    newWord,
    disable,
    inputValue,
    setInputValue,
    time,
    animation,
    handleInput,
    handleStart,
  } = props;
  return (
    <div className="type__racer">
      <span className="new-word">{newWord}</span>
      <div className="time">
        <span className="time__down">{time}</span>
      </div>
      <div className="start">
        <input
          disabled={disable}
          onKeyPress={(e) => handleInput(e)}
          type="text"
          className="input__text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button  disable={disable} handleStart={handleStart}></Button>
      </div>
    </div>
  );
};
export default TypeRacer;
