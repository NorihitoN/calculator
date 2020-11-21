import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { DatePicker, message, List, Typography, Row, Col, Input, Layout} from 'antd';
const {Header, Content, Sider} = Layout
import 'antd/dist/antd.css';

export default function Home() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };

  const [histories, setHistories] = useState([
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]);

  return (
    <div>
      <Head>
        <title>Calculation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title} style={{marginTop: 50, marginBottom: 50}}>
        Welcome to WebCalc
      </h1>

      <Row><Col span={16} offset={4}><Input placeholder="Input Formula"/></Col></Row>
      <Row>
        <Col flex="auto" offset={4}>
          <List
            header={<div>History</div>}
            bordered
            dataSource={histories}
            renderItem={item => (
              <List.Item>
                {item} <Typography.Text mark>[#1]</Typography.Text>
              </List.Item>
            )}
          />
        </Col>
        <Col flex="300px">Calculator</Col>
        <Col span={4}></Col>
      </Row>

      <p></p>
      <Layout style={{marginLeft: 200, marginRight: 200}}>
        <Header>Input Formula</Header>
        <Layout>
          <Content>
            Histories
            <List
              header={<div>History</div>}
              bordered
              dataSource={histories}
              renderItem={item => (
                <List.Item>
                  {item} <Typography.Text mark>[#1]</Typography.Text>
                </List.Item>
              )}
            />
          </Content>
          <Sider style={{width: 300}}>
            Calculator
          </Sider>
        </Layout>
      </Layout>
    </div>
  )
}
