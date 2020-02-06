import * as secondary from "../../../fonts/secondary"

const SecondaryFonts = `
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
       url('${secondary.WOFF2_4}') format('woff2'),
       url('${secondary.WOFF_4}') format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: local('Montserrat Italic'), local('Montserrat-Italic'),
       url('${secondary.WOFF2_4I}') format('woff2'),
       url('${secondary.WOFF_4I}') format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat Bold'), local('Montserrat-Bold'),
       url('${secondary.WOFF2_7}') format('woff2'),
       url('${secondary.WOFF_7}') format('woff');
}

@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 700;
  src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),
       url('${secondary.WOFF2_7I}') format('woff2'),
       url('${secondary.WOFF_7I}') format('woff');
}


`

export default SecondaryFonts
