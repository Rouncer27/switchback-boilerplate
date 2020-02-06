import React from "react"
import styled from "styled-components"

const WrapperDivStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: 768px) {
    max-width: 90rem;
  }

  @media (min-width: 1025px) {
    max-width: 110rem;
  }

  @media (min-width: 1200px) {
    max-width: 125rem;
  }

  @media (min-width: 1600px) {
    max-width: 150rem;
  }
`

const WrapperDiv = ({ children }) => {
  return <WrapperDivStyled>{children}</WrapperDivStyled>
}

export default WrapperDiv
