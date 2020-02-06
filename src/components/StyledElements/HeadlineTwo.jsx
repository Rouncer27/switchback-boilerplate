import React from "react"
import styled from "styled-components"
import { headlineOne, headlineTwo, headlineThree } from "../../Utilities"

const HeadlineTwoStyled = styled.h2`
  ${props => props.type === "h1" && headlineOne};
  ${props => props.type === "h2" && headlineTwo};
  ${props => props.type === "h3" && headlineThree};
`

const HeadlineTwo = ({ type, children }) => {
  return (
    <>
      <HeadlineTwoStyled type={type}>{children}</HeadlineTwoStyled>
    </>
  )
}

export default HeadlineTwo
