import React from "react"
import styled from "styled-components"

import { buttonTwo, buttonTwoAlt } from "../../Utilities"

const ButtonStyled = styled.button`
  ${buttonTwo};
  ${props => props.color === "alt" && buttonTwoAlt}
`

const ButtonTwo = ({ color, children }) => {
  return (
    <>
      <ButtonStyled color={color}>{children}</ButtonStyled>
    </>
  )
}

export default ButtonTwo
