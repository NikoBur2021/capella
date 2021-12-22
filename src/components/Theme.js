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