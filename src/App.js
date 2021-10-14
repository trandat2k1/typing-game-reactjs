import { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import TypeRacer from "./components/TypeRacer";
import Words from "./components/Words";
function App() {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState("");
  const [disable, setDisable] = useState(true);
  const [wrongResult, setWrongResult] = useState([]);
  const [correctResult, setCorrectResult] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);
  let wordRandom = Math.trunc(Math.random() * word.length);
  let checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResult((prevCorect) => [...prevCorect, newWord]);
      setCountCorrect((prevCorect) => prevCorect + 1);
    } else {
      setWrongResult((prevCorect) => [...prevCorect, inputValue.trim()]);
    }
  };
  let handleInput = (e) => {
    if (e.charCode === 13) {
      setNewWord(word[wordRandom]);
      setInputValue("");
      console.log(inputValue);
      checkAnswer();
    }
  };
  let handleStart = () => {
    setCountCorrect(0);
    setWrongResult([]);
    setCorrectResult([]);
    setInputValue("");
    setTime(30);
    setDisable(!disable);
  };
  useEffect(() => {
    setNewWord(word[wordRandom]);
  }, []);
  useEffect(() => {
    if (time <= 30 && time != 0 && disable === false) {
      setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setDisable(true);
      setNewWord(word[wordRandom]);
    }else if(disable)
    {
      setTime(30);
    }
  }, [time, disable]);
  return (
    <div className="App">
      <TypeRacer
        newWord={newWord}
        disable={disable}
        inputValue={inputValue}
        setInputValue={setInputValue}
        time={time}
        animation={animation}
        handleInput={handleInput}
        handleStart={handleStart}
      ></TypeRacer>
      <Result
        wrongResult={wrongResult}
        correctResult={correctResult}
        countCorrect={countCorrect}
      ></Result>
    </div>
  );
}

export default App;
