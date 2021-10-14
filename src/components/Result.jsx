import React from "react";
const Result = (props) => {
  const { wrongResult, correctResult, countCorrect } = props;
  return (
    <div className="result">
      <h1 className="result__lable">Result Correct : {countCorrect} </h1>
      <div className="result__area">
        <div className="result__correct">
          <h3>Correct</h3>
          {correctResult.map((value, index) => {
           return <span key={index}>{value}</span>;
          })}
        </div>
        <div className="result__wrong">
        <h3>Wrong</h3>
          {wrongResult.map((value, index) => {
            return <span key={index}>{value}</span>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Result;
