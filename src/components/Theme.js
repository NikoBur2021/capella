import {createTheme} from "@material-ui/core/styles";
import Uchen from '../fonts/OpenSansCondensed-Light.ttf'

const uchen = {
    fontFamily: 'Uchen',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Uchen'),
    local('Uchen-Regular'),
    url(${Uchen}) format('truetype')
  `,
    // unicodeRange:
    //     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({
    typography: {
        fontFamily: 'Uchen',
        fontSize:14
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [uchen],
            },
        },
    },
    palette: {
        primary: {
            main: '#fafafa'
        },
        secondary: {
            main: '#000'
        },
        home: {
            main: '#cc9d9d'
        },
        text: {
            primary: '#565252'
        }


    },
});
export default theme;