import React from "react"
import styled from "styled-components"

import { buttonOne, buttonOneAlt } from "../../Utilities"

const ButtonStyled = styled.button`
  ${buttonOne};
  ${props => props.color === "alt" && buttonOneAlt}
`

const ButtonOne = ({ color, children }) => {
  return (
    <>
      <ButtonStyled color={color}>{children}</ButtonStyled>
    </>
  )
}

export default ButtonOne
