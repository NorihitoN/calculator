import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { List, Typography } from "antd";

interface HistoryProps {
 histories: string[] 
}

const StyledHistory = styled.div`
  padding: 1.5rem 1rem;
`

export const History: FunctionComponent<HistoryProps> = ({ histories }) => {
  return (
    <StyledHistory>
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
    </StyledHistory>
  )
}