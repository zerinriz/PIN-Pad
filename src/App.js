import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const answer = "1234";
  const [count, setCount] = useState(0);
  const [pin, setPin] = useState("");
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [numLimit, setNumLimit] = useState(false);

  let buffer = [];
  buffer.push(<p key="p">Maximum number of pin is 4 !</p>);

  const addDigit = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    } else if (pin.length >= 4) {
      setNumLimit(true);
    }
  };

  const clear = (digit) => {
    setPin("");
    setHidden(true);
    setNumLimit(false);
  };

  const enter = () => {
    setHidden(false);
    setNumLimit(false);
    if (pin === answer) {
      setPin("-OK-");
    } else {
      setPin("-ERROR-");
      setCount(count + 1);
      if (count >= 2) {
        setPin("-LOCKED-");
        setDisabled(true);
        setTimeout(() => {
          setDisabled(false);
          setCount(0);
          setPin("");
        }, 30000);
      }
    }
  };

  return (
    <div className="container">
      <header>
        Pin-Pad
        <div className="pinNumberMax">{numLimit && buffer}</div>
      </header>
      <Display text={pin} hidden={hidden} numLimit={numLimit} key="d" />
      <Button key={1} caption="1" action={addDigit} disabled={disabled} />
      <Button key={2} caption="2" action={addDigit} disabled={disabled} />
      <Button key={3} caption="3" action={addDigit} disabled={disabled} />
      <br />
      <Button key={4} caption="4" action={addDigit} disabled={disabled} />
      <Button key={5} caption="5" action={addDigit} disabled={disabled} />
      <Button key={6} caption="6" action={addDigit} disabled={disabled} />
      <br />
      <Button key={7} caption="7" action={addDigit} disabled={disabled} />
      <Button key={8} caption="8" action={addDigit} disabled={disabled} />

      <Button key={9} caption="9" action={addDigit} disabled={disabled} />
      <br />
      <Button key="c" caption="Clear" action={clear} disabled={disabled} />
      <Button key={0} caption="0" action={addDigit} disabled={disabled} />
      <Button key="e" caption="Enter" action={enter} disabled={disabled} />
    </div>
  );
}

export default App;
