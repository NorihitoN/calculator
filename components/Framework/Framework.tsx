import { FunctionComponent } from "react"
import Head from "next/head";
import styled from "styled-components"

const Container = styled.div`
  max-height: 100vh;
  padding: 0 10rem;
`
export const Framework: FunctionComponent = ({ children }) => {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Web calculation to have usefull shortcut keyboard."
        />
        <title>Calculation</title>
      </Head>
      <main>{children}</main>
    </Container>
  );
};
