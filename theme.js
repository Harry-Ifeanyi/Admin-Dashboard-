import { createTheme } from "@mui/material";
import { purple, grey } from "@mui/material/colors";


let theme = createTheme({
    palette: {
        primary:{
            main: '#FFFFFF',
            normal: purple[50],
            dark: '#0b2948'
        },

        secondary: {
            main: grey[50],
            normal: grey[900]

        },

        info: {
            main: '#e7d1eb'
        }
    },

    typography: {
        subtitle1: {
          fontFamily: 'Quicksand',
          fontWeight: 600,
        }, 
        
        h5: {
            fontFamily: 'Poppins',
            fontWeight: 600,
        },

        subtitle2: {
            fontFamily: 'Quicksand',
            fontWeight: 400,
          },
        
        body2: {
            fontFamily: 'Quicksand',
            fontWeight: 600,
        },

        caption: {
            fontFamily: 'Quicksand',
            fontWeight: 600,
            
        }  
          
        
        }
    })


export default theme;

