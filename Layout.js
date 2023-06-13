import LeftDrawer from "./LeftDrawer";
import TopBar from "./TopBar";
import { Box } from "@mui/material";
import theme from "./theme";

const Layout = ({children}) => {
    
    /**layout is an High level component with the AppBar and LeftDrawer nested into it, 
     * it's wrapping all other components in the App.js file thats why it has children passed in as a props */

    return ( 
        <Box sx={styles.rootbox}>
            <LeftDrawer  />
             <TopBar />
             <Box>
                <Box sx={styles.toolspace}></Box>
               {children} 
             </Box>
               
        </Box>     
     );
}

/** @type {import("@mui/material").SxProps}  */
const styles = {
    rootbox: {
        display: 'flex',
        bgcolor: 'primary.normal'

    },
    toolspace: theme.mixins.toolbar
   
    }

export default Layout;