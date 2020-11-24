import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { List, Typography, Row, Col } from 'antd';
import 'antd/dist/antd.css';

export default function Home() {

  const [histories, setHistories] = useState([
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Calculation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title} style={{marginTop: 50, marginBottom: 50}}>
        Welcome to WebCalc
      </h1>
      <p>This is the calculator which can have memory shortcut key command. It will help you to calculate by using histories.</p>
      <p><code className={styles.code}>#1</code> shortcut key command will enter the latest answer you calculated.</p>

      <section>
        <Row className={styles.display}>
          <Col>
            <div className={styles.calculation}>
              <h2>1521 x 35 = </h2>
            </div>
            <div className={styles.result}>
              <h3>13256710438671</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col flex="auto" className={styles.history}>
            <List
              header={<div>Calculator History</div>}
              bordered
              dataSource={histories}
              renderItem={item => (
                <List.Item>
                  {item} <Typography.Text mark>[#1]</Typography.Text>
                </List.Item>
              )}
            />
          </Col>
          <Col flex="300px" className={styles.buttons} style={{borderWidth: 1}}>
            <div className={styles.calcarea} style={{paddingLeft:30, paddingRight:30}}>
              Calculator Display Area
              <div className={styles.numbers}></div>
              <div className={styles.buttons}></div>
            </div>
          </Col>
        </Row>
      </section>

    </div>
  )
}
