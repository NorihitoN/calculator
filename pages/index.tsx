import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components"
import { Framework } from "../components/Framework/Framework";
import { Pad } from "../components/Pad/Pad"
import { Display } from "../components/Display/Display"
import { useState } from "react";
import { List, Typography, Row, Col } from "antd";
import "antd/dist/antd.css";

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 50px 0px;
  line-height: 1.15;
`;

const Home = () => {
  const [histories, setHistories] = useState([
    "2542 x 354 = 1354262",
    "32662226 / 3154 = 4514551",
    "24524 + 4522452= 415452245",
    "14623 -  14524 = 4155414",
    "4262656 + 4151 = 1541"
  ]);

  return (
    <Framework>

      <Title>Welcom to WebCalc</Title>
      <p>
        This is the calculator which can have memory shortcut key command. It
        will help you to calculate by using histories.
      </p>
      <p>
        <code className={styles.code}>#1</code> shortcut key command will enter
        the latest answer you calculated.
      </p>

      <section>
        <Display value="1000" expression="10 x 100" />
        <Row>
          <Col flex="auto" className={styles.history}>
            <List
              header={<div>Calculator History</div>}
              bordered
              dataSource={histories}
              renderItem={(item) => (
                <List.Item>
                  {item} <Typography.Text mark>[#1]</Typography.Text>
                </List.Item>
              )}
            />
          </Col>
          <Col
            flex="300px"
            className={styles.buttons}
          >
            <div
              className={styles.calcarea}
              style={{ paddingLeft: 30, paddingRight: 30 }}
            >
              <Pad />
            </div>
          </Col>
        </Row>
      </section>
    </Framework>
  );
}

export default Home;