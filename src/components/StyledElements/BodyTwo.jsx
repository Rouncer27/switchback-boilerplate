import React from "react"
import styled from "styled-components"

import { bodyCopyTwo } from "../../Utilities"

const BodyTwoStyled = styled.div`
  p {
    ${bodyCopyTwo};
  }
`

const BodyTwo = ({ children }) => {
  return <BodyTwoStyled>{children}</BodyTwoStyled>
}

export default BodyTwo
