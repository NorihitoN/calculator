import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Key } from "../Key/Key";

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`;

export const Pad: FunctionComponent = () => {
  return (
    <StyledPad>
      <Key color="red"> AC </Key>
      <Key> C </Key>
      <Key> -/+ </Key>
      <Key color="dark"> ÷ </Key>
      <Key>7</Key>
      <Key>8</Key>
      <Key>9</Key>
      <Key color="dark"> x </Key>
      <Key>4</Key>
      <Key>5</Key>
      <Key>6</Key>
      <Key color="dark"> - </Key>
      <Key>2</Key>
      <Key>3</Key>
      <Key>1</Key>
      <Key color="dark"> + </Key>
      <Key>0</Key>
      <Key>.</Key>
      <Key color="green" isLarge={true}>=</Key>
    </StyledPad>
  );
};
