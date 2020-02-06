import React from "react"
import styled from "styled-components"

import { bodyCopyOne } from "../../Utilities"

const BodyOneStyled = styled.div`
  p {
    ${bodyCopyOne};
  }
`

const BodyOne = ({ children }) => {
  return <BodyOneStyled>{children}</BodyOneStyled>
}

export default BodyOne
