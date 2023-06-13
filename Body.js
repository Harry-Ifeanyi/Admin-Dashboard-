
import { Box } from "@mui/material";
import { Typography } from '@mui/material';
//import {Card} from "@mui/material";


const Body = () => {

    

    return (
        <Box sx={styles.body}>

            <Box>
                <Typography sx={styles.text} variant='subtitle1'>
                    Good Morning, Harry! 
                </Typography>

                <Typography sx={styles.text1} variant='subtitle2'>
                    Here's what is happening with your store today 
                </Typography> 

            </Box>

             
        



        </Box>
        
    );
}

/** @type {import("@mui/material").SxProps}  */
const styles = {
    body: {
        display: 'flex',
        width: 'calc(100% - 250px)',
        ml: '250px',
        
    },

    card: {
        bgcolor: 'primary.normal',
        borderRadius: 0,
        boxShadow: 0,
        Height: '20px',
        mt: 5, 
        alignItems:'center'
     },

    text: {
        mt: 3,
        ml: 2,
        mb: 0
    },

    text1: {
        ml: 2
    }
 }
  

export default Body;