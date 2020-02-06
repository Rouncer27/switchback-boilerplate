import { colors } from "./index"
import { fonts, fontSizer } from "./index"

const buttonBaseStyles = `
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.8)};
  display: inline-block;
  padding: 1.5rem 5rem;
  transition: all 0.3s ease;
  border-radius: 0.2rem;
  border: solid 0.1rem ${colors.colorPrimary};
  box-shadow: none;
  font-family: ${fonts.fontPrimary};
  font-style: normal;
  font-stretch: normal;
  font-weight: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const buttonOne = `
  ${buttonBaseStyles};
  background: ${colors.colorPrimary};
  color: ${colors.colorShad};

  &:hover {
    background: ${colors.colorSecondary};
    border-color: ${colors.colorSecondary};
  }
`

export const buttonOneAlt = `
  border-color: ${colors.colorSecondary};
  background: ${colors.colorSecondary};

  &:hover {
    background: ${colors.colorPrimary};
    border-color: ${colors.colorPrimary};
  }
`

export const buttonTwo = `
  ${buttonBaseStyles};
  color: ${colors.colorPrimary};

  &:hover {
    border-color: ${colors.colorSecondary};
    color: ${colors.colorSecondary};
  }
`

export const buttonTwoAlt = `
  color: ${colors.colorSecondary};
  border-color: ${colors.colorSecondary};

  &:hover {
    border-color: ${colors.colorPrimary};
    color: ${colors.colorPrimary};
  }
`
