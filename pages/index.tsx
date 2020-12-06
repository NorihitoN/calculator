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
    console.log(answer, currentOperator, display, calculated);
    let newDisplay = display;

    // displayが0のときに0をクリックしても何もしない
    if ((display === "0" && digit === 0) || display.length > 11) {
      return;
    }
    // dispalyが0のときに2を押すと2と表示させる。"02"とはならない。
    // OperatorKeyもしくはEnterKeyにて計算されたあと（calculated = trueとなる)に
    // 数値がクリックされると表示はリセットされる。 例）計算結果に14が表示されている状態で、
    // さらに数値45がクリックされると、"45"となる。"1445"とはならない。
    if (display === "0" || calculated === true) {
      // displayに表示する文字列を初期化
      newDisplay = digit.toString();
    } else {
      // displayの表示されている文字列の末尾に追加
      newDisplay += digit.toString();
    }
    setDisplay(newDisplay);
    setCalculated(false);
  };

  const onOperatorKeyClick = (operator: Operator) => {
    console.log(answer, currentOperator, display, calculated);

    // Operatorを連続で押した場合は無効
    if (calculated === true) {
      setCurrentOperator(operator);
      if(currentOperator != undefined){
        // 前回処理がOperatorの場合
        setExpression(expression.slice(0, -1) + operator);
      } else {
        // 前回処理がEnterの場合
        setExpression(expression + operator);
      }
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
    console.log(answer, currentOperator, display, calculated);
    if(currentOperator === undefined) return; 

    // Enterを連続で押した場合は無効
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
    setExpression(newAnswer.toString());
    setDisplay(newAnswer.toString());
    setAnswer(newAnswer);
    setCurrentOperator(undefined);

  };

  const onClearKeyClick = () => {
    console.log(answer, currentOperator, display, calculated);
    if(currentOperator === undefined) {
      setCalculated(false);
      setExpression("");
      setDisplay("0");
      setAnswer(0);
    } else {
      setDisplay("");
    }
  }

  const onClearAllKeyClick = () => {
    console.log("Clear all");
    setCalculated(false);
    setExpression("");
    setDisplay("0");
    setAnswer(0);
    setCurrentOperator(undefined);
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
              onClearAllKeyClick={onClearAllKeyClick}
            />
          </Col>
          <Col xs={{span:0}} lg={{span: 0, offset:2}}></Col>
        </Row>
      </section>
    </Framework>
  );
};

export default Home;
