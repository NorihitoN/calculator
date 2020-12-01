import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { Key } from "../Key/Key";
import { Digit, Operator } from "../../types/types";

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  margin: 0 30px;
`;

interface PadProps{
  onDigitKeyClick: (digit: Digit) => void
  onOperatorKeyClick: (operator: Operator) => void
}

export const Pad: FunctionComponent<PadProps> = ({ onDigitKeyClick, onOperatorKeyClick }) => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    console.log(keyCode, shiftKey);
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitKeyClick((keyCode - 48) as Digit);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorKeyClick('+' as Operator);
    } else if (keyCode === 109 || (keyCode === 189)) {
      onOperatorKeyClick('-' as Operator);
    } else if (keyCode === 106 || (keyCode === 186 && shiftKey)) {
      onOperatorKeyClick('×' as Operator);
    } else if (keyCode === 111 || (keyCode === 191)) {
      onOperatorKeyClick('÷' as Operator);
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <StyledPad>
      <Key color="red"> AC </Key>
      <Key> C </Key>
      <Key> -/+ </Key>
      <Key onClick={() => onOperatorKeyClick('÷')} color="dark"> ÷ </Key>
      <Key onClick={() => onDigitKeyClick(7)}>7</Key>
      <Key onClick={() => onDigitKeyClick(8)}>8</Key>
      <Key onClick={() => onDigitKeyClick(9)}>9</Key>
      <Key onClick={() => onOperatorKeyClick('×')} color="dark"> x </Key>
      <Key onClick={() => onDigitKeyClick(4)}>4</Key>
      <Key onClick={() => onDigitKeyClick(5)}>5</Key>
      <Key onClick={() => onDigitKeyClick(6)}>6</Key>
      <Key onClick={() => onOperatorKeyClick('-')} color="dark"> - </Key>
      <Key onClick={() => onDigitKeyClick(1)}>1</Key>
      <Key onClick={() => onDigitKeyClick(2)}>2</Key>
      <Key onClick={() => onDigitKeyClick(3)}>3</Key>
      <Key onClick={() => onOperatorKeyClick('+')} color="dark"> + </Key>
      <Key onClick={() => onDigitKeyClick(0)}>0</Key>
      <Key>.</Key>
      <Key color="green" islarge={"true"}>
        =
      </Key>
    </StyledPad>
  );
};
