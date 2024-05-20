import React, { useState } from 'react';

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(0);

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    }

    const handleAdd = () => {
      setResult(result + Number(inputValue));
      setInputValue('');
    }

    const handleSub = () => {
      setResult(result - Number(inputValue));
      setInputValue('');
    }


    const handleReset = () => {
      setResult(0);
      setInputValue('');
    }

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input 
        type = "number"
        value = {inputValue}
        onChange={handleInputChange}
          /> 만큼을 
        <button onClick = {handleAdd}>더할게요</button> 
        <button onClick = {handleSub}>뺄게요</button>
        <button onClick = {handleReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
