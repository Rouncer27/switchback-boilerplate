import React from "react"
import styled from "styled-components"
import WrapperDiv from "./StyledElements/WrapperDiv"
import HeadlineOne from "./StyledElements/HeadlineOne"
import HeadlineTwo from "./StyledElements/HeadlineTwo"
import HeadlineThree from "./StyledElements/HeadlineThree"
import BodyOne from "./StyledElements/BodyOne"
import BodyTwo from "./StyledElements/BodyTwo"
import ButtonOne from "./StyledElements/ButtonOne"
import ButtonTwo from "./StyledElements/ButtonTwo"

const StyleGuildSetup = styled.section`
  .headlines {
    width: 100%;
  }

  .buttons {
    & > div {
      margin-bottom: 1rem;
      margin-left: 2.5rem;
    }
  }
`

const Styleguide = () => {
  return (
    <StyleGuildSetup>
      <WrapperDiv>
        <div className="headlines">
          <HeadlineOne type="h1">
            H1 --- Aliquam tincidunt mauris eu risus.
          </HeadlineOne>
          <HeadlineTwo type="h2">
            H2 --- Vestibulum auctor dapibus neque.
          </HeadlineTwo>
          <HeadlineThree type="h3">
            H3 --- Praesent placerat risus quis eros.
          </HeadlineThree>
        </div>
        <BodyOne>
          <p>
            B1 --- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
            a, pede.
          </p>
          <p>
            B1 --- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
            a, pede.
          </p>
        </BodyOne>
        <BodyTwo>
          <p>
            B2 --- Praesent dapibus, neque id cursus faucibus, tortor neque
            egestas auguae, eu vulputate magna eros eu erat. Aliquam erat
            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
            luctus, metus.
          </p>
          <p>
            B2 --- Praesent dapibus, neque id cursus faucibus, tortor neque
            egestas auguae, eu vulputate magna eros eu erat. Aliquam erat
            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
            luctus, metus.
          </p>
        </BodyTwo>
        <div className="buttons">
          <BodyOne>
            <p>Button type One</p>
          </BodyOne>
          <div>
            <ButtonOne>Book Now</ButtonOne>
          </div>
          <div>
            <ButtonOne color="alt">Book Now</ButtonOne>
          </div>
        </div>
        <div className="buttons">
          <BodyOne>
            <p>Button type Two</p>
          </BodyOne>
          <div>
            <ButtonTwo>Learn More</ButtonTwo>
          </div>
          <div>
            <ButtonTwo color="alt">Learn More</ButtonTwo>
          </div>
        </div>
      </WrapperDiv>
    </StyleGuildSetup>
  )
}

export default Styleguide
