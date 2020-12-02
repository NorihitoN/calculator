import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface DisplayProps {
  expression: string
  value: string
}

const StyledIndicatorList = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  opacity: 0.4;
  height: 32px;
`

const StyleScreen = styled.div`
  font-size: 2.8rem;
  min-height: 1.2rem;
`
const StyledDisplayBorder = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 0.5rem 0 0 1.5rem;
  height: 100%
`

const StyledDisplay = styled.div`
  padding: 1.5rem 1rem;
  height: 160px;
`

export const Display: FunctionComponent<DisplayProps> = ({ value, expression }) => {
  return (
    <StyledDisplay>
      <StyledDisplayBorder>
        <StyledIndicatorList>
          {expression}
        </StyledIndicatorList>
        <StyleScreen>
          {value}
        </StyleScreen>
      </StyledDisplayBorder>
    </StyledDisplay>
  )
}