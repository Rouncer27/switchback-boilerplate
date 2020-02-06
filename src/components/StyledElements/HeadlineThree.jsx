import React from "react"
import styled from "styled-components"
import { headlineOne, headlineTwo, headlineThree } from "../../Utilities"

const HeadlineThreeStyled = styled.h3`
  ${props => props.type === "h1" && headlineOne};
  ${props => props.type === "h2" && headlineTwo};
  ${props => props.type === "h3" && headlineThree};
`

const HeadlineThree = ({ type, children }) => {
  return (
    <>
      <HeadlineThreeStyled type={type}>{children}</HeadlineThreeStyled>
    </>
  )
}

export default HeadlineThree
