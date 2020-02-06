import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const headlineOne = `
    ${fontSizer(2.4, 4, 76.8, 150, 2.2)}
    color: ${colors.blackLight};
    font-family: ${fonts.fontSecondary};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.8;
    letter-spacing: normal;
  `

export const headlineTwo = `
    ${fontSizer(2, 3.4, 76.8, 150, 2)}
    color: ${colors.blackLight};
    font-family: ${fonts.fontSecondary};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
`

export const headlineThree = `
    ${fontSizer(1.8, 3, 76.8, 160, 2)}
    color: ${colors.blackLight};
    font-family: ${fonts.fontSecondary};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
`
