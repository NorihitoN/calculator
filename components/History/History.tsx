import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { List, Typography } from "antd";

interface HistoryProps {
 histories: string[] 
}

const StyledHistory = styled.div`
  padding: 1.5rem 1rem;
`
const StyledSpan = styled.span`
  float: right;
`

export const History: FunctionComponent<HistoryProps> = ({ histories }) => {
  return (
    <StyledHistory>
      <List
        header={<div>Calculator History</div>}
        bordered
        dataSource={histories}
        renderItem={(item, index) => (
          <List.Item>
            {item} <StyledSpan><Typography.Text mark>[#{index}]</Typography.Text></StyledSpan>
          </List.Item>
        )}
      />
    </StyledHistory>
  )
}