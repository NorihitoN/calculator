import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { Key } from "../Key/Key";
import { Digit, Operator } from "../../types/types";

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  padding: 1.5rem 1rem;
`;

interface PadProps {
  onDigitKeyClick: (digit: Digit) => void;
  onOperatorKeyClick: (operator: Operator) => void;
  onEnterKeyClick: () => void;
  onClearKeyClick: () => void;
  onClearAllKeyClick: () => void;
  onPointKeyClick: () => void;
  onBackSpaceKeyClick: () => void;
  onSignKeyClick: () => void;
}

export const Pad: FunctionComponent<PadProps> = ({
  onDigitKeyClick,
  onOperatorKeyClick,
  onEnterKeyClick,
  onClearKeyClick,
  onClearAllKeyClick,
  onPointKeyClick,
  onBackSpaceKeyClick,
  onSignKeyClick,
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    console.log(keyCode, shiftKey);
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitKeyClick((keyCode - 48) as Digit);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorKeyClick("+" as Operator);
    } else if (keyCode === 109 || (keyCode === 189 && !shiftKey)) {
      onOperatorKeyClick("-" as Operator);
    } else if (keyCode === 106 || (keyCode === 186 && shiftKey)) {
      onOperatorKeyClick("×" as Operator);
    } else if (keyCode === 111 || (keyCode === 191 && !shiftKey)) {
      onOperatorKeyClick("÷" as Operator);
    } else if (keyCode === 13 || (keyCode === 189 && shiftKey)) {
      onEnterKeyClick();
    } else if (keyCode === 46) {
      onClearKeyClick();
    } else if (keyCode === 27) {
      onClearAllKeyClick();
    } else if (keyCode === 110 || keyCode === 190) {
      onPointKeyClick();
    } else if (keyCode === 8) {
      onBackSpaceKeyClick();
    } else if (keyCode === 83) {
      onSignKeyClick();
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
      <Key onClick={() => onClearAllKeyClick()}> AC </Key>
      <Key onClick={() => onClearKeyClick()}> C </Key>
      <Key onClick={() => onBackSpaceKeyClick()}> DEL </Key>
      <Key onClick={() => onOperatorKeyClick("÷")}> ÷ </Key>
      <Key onClick={() => onDigitKeyClick(7)}>7</Key>
      <Key onClick={() => onDigitKeyClick(8)}>8</Key>
      <Key onClick={() => onDigitKeyClick(9)}>9</Key>
      <Key onClick={() => onOperatorKeyClick("×")}> x </Key>
      <Key onClick={() => onDigitKeyClick(4)}>4</Key>
      <Key onClick={() => onDigitKeyClick(5)}>5</Key>
      <Key onClick={() => onDigitKeyClick(6)}>6</Key>
      <Key onClick={() => onOperatorKeyClick("-")}> - </Key>
      <Key onClick={() => onDigitKeyClick(1)}>1</Key>
      <Key onClick={() => onDigitKeyClick(2)}>2</Key>
      <Key onClick={() => onDigitKeyClick(3)}>3</Key>
      <Key onClick={() => onOperatorKeyClick("+")}> + </Key>
      <Key onClick={() => onSignKeyClick()}> -/+ </Key>
      <Key onClick={() => onDigitKeyClick(0)}>0</Key>
      <Key onClick={() => onPointKeyClick()}>.</Key>
      <Key onClick={() => onEnterKeyClick()}>
        =
      </Key>
    </StyledPad>
  );
};
