import React, { Component, useState } from "react";
import Text from "./text";
import Button from "./button";

function UseStates() {
  const [number, setNumber] = useState(0);

  function handleAdd() {
    setNumber(number + 1);
  }
  function handleReset() {
    setNumber(0);
  }
  function handleMul() {
    setNumber(number - 1);
  }
  return (
    <>
      <Text>{number}</Text>
      <div>
        <Button handleOnClick={()=>handleAdd()}>Add</Button>
        <Button handleOnClick={handleReset}>Reset</Button>
        <Button handleOnClick={handleMul}>Mul</Button>
      </div>
    </>
  );
}

export default UseStates;
