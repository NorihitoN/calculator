import styled from "styled-components"
import { Framework } from "../components/Framework/Framework";
import { Pad } from "../components/Pad/Pad"
import { Display } from "../components/Display/Display"
import { History } from "../components/History/History"
import { useState } from "react";
import { List, Typography, Row, Col } from "antd";
import "antd/dist/antd.css";
import { Digit, Operator } from "../types/types"

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 50px 0px;
  line-height: 1.15;
`;

const StyledCode = styled.code`
  background: #e7e7e7;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

const Home = () => {
  const [histories, setHistories] = useState<string[]>([
    "2542 x 354 = 1354262",
    "32662226 / 3154 = 4514551",
    "24524 + 4522452= 415452245",
    "14623 -  14524 = 4155414",
    "4262656 + 4151 = 1541"
  ]);
  const [answer, setAnswer] = useState<number>(0);
  const [display, setDisplay] = useState<string>("0");
  const [currentOperator, setCurrentOperator] = useState<Operator>();
  const [calculated, setCalculated] = useState<boolean>(false);

  const onDigitKeyClick = (digit: Digit) => {
    let newDisplay = display;

    if((display === '0' && digit === 0) || (display.length > 11) ){
      return;
    }
    if(display === '0' || calculated === true) {
      newDisplay = digit.toString();
    } else {
      newDisplay += digit.toString();
    }
    setDisplay(newDisplay);
    setCalculated(false);
    console.log(answer, currentOperator);
  };

  const onOperatorKeyClick = (operator: Operator) => {
    console.log(operator);

    // Operatorを連続で押した場合は無効
    if(calculated === true) return;

    let newAnswer = answer;
    if(currentOperator === undefined || currentOperator === "+") {
      newAnswer += Number(display);
    } else if (currentOperator === "-") {
      newAnswer -= Number(display);
    } else if (currentOperator === "×") {
      newAnswer *= Number(display);
    } else if (currentOperator === "÷") {
      newAnswer /= Number(display);
    }
    setCalculated(true);
    setAnswer(newAnswer);
    setDisplay(newAnswer.toString());
    setCurrentOperator(operator);
    console.log(answer, currentOperator);
  };

  return (
    <Framework>

      <Title>Welcom to WebCalc</Title>
      <p>
        This is the calculator which can have memory shortcut key command. It
        will help you to calculate by using histories.
      </p>
      <p>
        <StyledCode>#1</StyledCode> shortcut key command will enter
        the latest answer you calculated.
      </p>

      <section>
        <Display value={display} expression="10 x 100" />
        <Row>
          <Col flex="auto">
            <History histories={histories} />
          </Col>
          <Col flex="300px">
            <Pad onDigitKeyClick={onDigitKeyClick} onOperatorKeyClick={onOperatorKeyClick} />
          </Col>
        </Row>
      </section>
    </Framework>
  );
}

export default Home;