import styled from "styled-components";
import { Framework } from "../components/Framework/Framework";
import { Pad } from "../components/Pad/Pad";
import { Display } from "../components/Display/Display";
import { History } from "../components/History/History";
import { useState } from "react";
import { List, Typography, Row, Col } from "antd";
import "antd/dist/antd.css";
import { Digit, Operator } from "../types/types";

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
  font-size: 0.8rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Home = () => {
  const [histories, setHistories] = useState<string[]>([]);
  const [answer, setAnswer] = useState<number>(0);
  const [display, setDisplay] = useState<string>("0");
  const [currentOperator, setCurrentOperator] = useState<Operator>();
  const [calculated, setCalculated] = useState<boolean>(false);
  const [expression, setExpression] = useState<string>("");

  const onDigitKeyClick = (digit: Digit) => {
    let newDisplay = display;

    if ((display === "0" && digit === 0) || display.length > 11) {
      return;
    }
    if (display === "0" || calculated === true) {
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
    if (calculated === true) {
      setCurrentOperator(operator);
      setExpression(expression.slice(0, -1) + operator);
      return;
    }

    let newAnswer = answer;
    if (currentOperator === undefined || currentOperator === "+") {
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
    setExpression(expression + " " + display + " " + operator )
    setDisplay(newAnswer.toString());
    setCurrentOperator(operator);
    console.log(answer, currentOperator);
  };

  const onEnterKeyClick = () => {
    console.log("Enter");
    if(currentOperator === undefined) return; 

    // Operatorを連続で押した場合は無効
    if (calculated === true) {
      setCurrentOperator(undefined);
      setHistories([expression.slice(0,-1) + " = " + answer.toString(), ...histories]);
      setExpression("");
      setAnswer(0);
      return;
    } 

    let newAnswer = answer;
    if (currentOperator === undefined || currentOperator === "+") {
      newAnswer += Number(display);
    } else if (currentOperator === "-") {
      newAnswer -= Number(display);
    } else if (currentOperator === "×") {
      newAnswer *= Number(display);
    } else if (currentOperator === "÷") {
      newAnswer /= Number(display);
    }
    setCalculated(true);
    setHistories([expression + " " + display + " = " + newAnswer.toString(), ...histories]);
    setExpression("");
    setDisplay(newAnswer.toString());
    setAnswer(0);
    setCurrentOperator(undefined);

  };

  const onClearKeyClick = () => {
    console.log("Delete");
    if(currentOperator === undefined) {
      setCalculated(false);
      setExpression("");
      setDisplay("");
      setAnswer(0);
    } else {
      setDisplay("");
    }
  }

  return (
    <Framework>
      <Title>WebCalc</Title>
      <Row>
        <Col xs={{span:24}} lg={{span: 20, offset:2}}>
          <p>
            This is the calculator which can have memory shortcut key command. It
            will help you to calculate by using histories.
          </p>
          <p>
            <StyledCode>#1</StyledCode> shortcut key command will enter the latest
            answer you calculated.
          </p>
        </Col>
      </Row>

      <section>
        <Row>
          <Col xs={{span:24}} lg={{span: 20, offset:2}}>
            <Display value={display} expression={`${expression}`} />
          </Col>
        </Row>
        <Row>
          <Col xs={{span:24}} lg={{span: 12, offset:2}}>
            <History histories={histories} />
          </Col>
          <Col xs={{span:24}} lg={{span: 8}}>
            <Pad
              onDigitKeyClick={onDigitKeyClick}
              onOperatorKeyClick={onOperatorKeyClick}
              onEnterKeyClick={onEnterKeyClick}
              onClearKeyClick={onClearKeyClick}
            />
          </Col>
          <Col xs={{span:0}} lg={{span: 0, offset:2}}></Col>
        </Row>
      </section>
    </Framework>
  );
};

export default Home;
