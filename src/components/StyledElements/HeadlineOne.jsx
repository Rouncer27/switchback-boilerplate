import React from "react"
import styled from "styled-components"
import { headlineOne, headlineTwo, headlineThree } from "../../Utilities"

const HeadlineOneStyled = styled.h1`
  ${props => props.type === "h1" && headlineOne};
  ${props => props.type === "h2" && headlineTwo};
  ${props => props.type === "h3" && headlineThree};
`

const HeadlineOne = ({ type, children }) => {
  return (
    <>
      <HeadlineOneStyled type={type}>{children}</HeadlineOneStyled>
    </>
  )
}

export default HeadlineOne
