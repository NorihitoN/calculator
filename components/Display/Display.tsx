import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface DisplayProps {
  expression: string
  value: string
}

const StyledIndicatorList = styled.div`
  font-size: 1.5rem;
  line-height: 1;
  opacity: 0.4;
  min-height: 1rem;
`

const StyleScreen = styled.div`
  font-size: 3.0rem;
  min-height: 1.2rem;
`

const StyledDisplay = styled.div`
  padding: 1.5rem 1rem;
`

export const Display: FunctionComponent<DisplayProps> = ({ value, expression }) => {
  return (
    <StyledDisplay>
      <StyledIndicatorList>
        {expression}
      </StyledIndicatorList>
      <StyleScreen>
        {value}
      </StyleScreen>
    </StyledDisplay>
  )
}