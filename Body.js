//import CardHeader from '@mui/material/CardHeader';
import { Box, Typography} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import {styled, alpha} from '@mui/material/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import BoltIcon from '@mui/icons-material/Bolt';
import Card from '@mui/material/Card';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Body = () => {

   /* const Content = styled(CardContent)(`
        padding: 10px ;
        `);
   */ 
        const TextButton = styled(Button)(({ theme }) => ({
            textTransform: 'none',
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },})) 

            const FlashButton = styled(Button)(({ theme }) => ({
                width: 1,
                height: 32,
                color:  alpha(theme.palette.secondary.normal, 0.5),
                textTransform: 'none',
                backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.secondary.main, 0.9),
                },})) 
        
            
        const ColorButton = styled(Button)(({ theme }) => ({
            color: theme.palette.primary.main,
            
            backgroundColor: theme.palette.primary.dark,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },})) 

            const AddButton = styled(Button)(({ theme }) => ({
                width: 125,
                color:  alpha(theme.palette.secondary.normal, 0.5),
                textTransform: 'none',
                backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.secondary.main, 0.9),
                },})) 


                const CardText = styled(Typography)(({ theme }) => ({
                    marginTop: 15,
                    marginLeft: 10, 
                    marginRight:30,           
                    color:  alpha(theme.palette.secondary.normal, 0.5),
                    textTransform: 'none',
                    '&:hover': {
                      color: alpha(theme.palette.secondary.normal, 1),
                    },})) 

               const CardText1 = styled(Typography)(({ theme }) => ({
                   marginTop: 15,
                   marginLeft: 0,            
                   color:  alpha(theme.palette.secondary.normal, 0.5),
                   textTransform: 'none',
                   '&:hover': {
                   color: alpha(theme.palette.secondary.normal, 1),
                 },}))   

              const CardText1a = styled(Typography)(({ theme }) => ({
                   marginTop: 15,
                   marginLeft: 0,            
                   color:  alpha(theme.palette.error.dark, 1),
                   textTransform: 'none',
                   '&:hover': {
                   color: alpha(theme.palette.secondary.normal, 1),
                 },}))   
                 
                 
                 const CardText2= styled(Typography)(({ theme }) => ({
                    marginTop: 20,
                    marginBottom: 12,
                    marginLeft: 10,            
                    color:  alpha(theme.palette.secondary.normal, 1),
                    textTransform: 'none',
                    '&:hover': {
                    color: alpha(theme.palette.secondary.normal, 1),
                  },}))

                    const CardIcon = styled(ArrowOutwardIcon)(({ theme }) => ({
                        marginTop: 17,
                        height: 13,
                        marginLeft: 10,            
                        color:  alpha(theme.palette.secondary.normal, 0.5),
                        textTransform: 'none',
                        '&:hover': {
                          color: alpha(theme.palette.secondary.normal, 1),
                        },})) 

                 const CardIcon2 = styled(SouthEastOutlinedIcon)(({ theme }) => ({
                        marginTop: 17,
                        height: 13,
                        marginLeft: 10,            
                        color:  alpha(theme.palette.error.dark, 1),
                        textTransform: 'none',
                        '&:hover': {
                          color: alpha(theme.palette.secondary.normal, 1),
                        },})) 

    return (
        <Box sx={styles.body}>

            <Box sx={{display: 'flex'}}>
                <Box sx={{mr:36.5}}>
                    <Typography sx={styles.text} variant='subtitle1'>
                        Good Morning, Harry! 
                    </Typography>

                    <Typography sx={styles.text1} variant='subtitle2'>
                        Here's what is happening with your store today 
                    </Typography> 
                </Box>

                    

           
            <Box sx={{mt: 4, mr: 3 }}>
                <ButtonGroup variant="contained" >
                    <TextButton> <Typography variant='caption'>01 May, 2023 to 31 May, 2023</Typography></TextButton>
                    <ColorButton > <CalendarMonthIcon sx={{width: 15}} /> </ColorButton>
                </ButtonGroup>
            </Box>

            <Box sx={{mt: 4,  mr: 3}}>   
                    <AddButton startIcon={<ControlPointIcon  sx={{width: 12}} />}> <Typography variant='caption'>Add Product</Typography></AddButton>
            </Box>

            <Box sx={{mt: 4}}>   
                    <FlashButton >  <BoltIcon  sx={{width: 12}} /> </FlashButton>
            </Box>
            </Box>
           
           <Box sx={{display: 'flex'}}>
            <Box className="card">      
                <Card sx={styles.card1}>
                    <Box sx={{display: 'flex'}}>
                        <CardText variant='body2'> TOTAL EARNINGS </CardText>
                        <CardIcon />
                        <CardText1 variant='body2'> +16.24 % </CardText1>
                    </Box>

                    <CardText2 variant='h5'>$599.31k</CardText2>


                    <Box sx={{display: 'flex'}}>
                        <CardText sx={{textDecoration: 'underline'}} variant='body2'> View net earnings </CardText>
                        <MonetizationOnOutlinedIcon sx={{ml: 5, height: 30, color: '#0b2948'}}/>
                    </Box>

                
                </Card>
            </Box>  

            <Box className='card'>
                <Card sx={styles.card1}>
                        <Box sx={{display: 'flex'}}>
                            <CardText variant='body2'> ORDERS </CardText>
                            <CardIcon2 sx={{ml: 9}} />
                            <CardText1a  variant='body2'> -6.23 % </CardText1a>
                        </Box>

                        <CardText2 variant='h5'>99,931</CardText2>


                        <Box sx={{display: 'flex'}}>
                            <CardText sx={{textDecoration: 'underline'}} variant='body2'> View all orders </CardText>
                            <ShoppingCartOutlinedIcon sx={{ml: 7, height: 30, color: '#2979ff'}}/>
                        </Box>

                    
                </Card>      
            </Box>

            <Box className='card'>
            <Card sx={styles.card1}>
                    <Box sx={{display: 'flex'}}>
                        <CardText variant='body2'> CUSTOMERS </CardText>
                        <CardIcon sx={{ml: 5}} />
                        <CardText1 variant='body2'> +26.74 % </CardText1>
                    </Box>

                    <CardText2 variant='h5'>199.31M</CardText2>


                    <Box sx={{display: 'flex'}}>
                        <CardText sx={{textDecoration: 'underline'}} variant='body2'> See details </CardText>
                        <AccountCircleOutlinedIcon sx={{ml: 10, height: 30, color: '#ffea00'}}/>
                    </Box>

                
                </Card>      
           </Box>

           <Box className='card'>
            <Card sx={styles.card1}>
                    <Box sx={{display: 'flex'}}>
                        <CardText variant='body2'> MY BALANCE </CardText>
                        <CardIcon  sx={{ml: 4.5}} />
                        <CardText1 variant='body2'> +0.00 % </CardText1>
                    </Box>

                    <CardText2 variant='h5'>$399.31k</CardText2>


                    <Box sx={{display: 'flex'}}>
                        <CardText sx={{textDecoration: 'underline'}} variant='body2'> Withdraw money </CardText>
                        <AccountBalanceWalletOutlinedIcon sx={{ml: 5, height: 30, color: '#2c387e'}}/>
                    </Box>

                
                </Card>      
           </Box>

           </Box>
        </Box>
        
    );
}

/** @type {import("@mui/material").SxProps}  */
const styles = {
    body: {
        display: 'block',
        width: 'calc(100% - 250px)',
        ml: '250px',
        
    },

    card1: {
        display: 'block',
        width: 252,
        height: 140,
        ml: 2,
        mt: 3
    },

    cardText: {
        mt: 2,
        ml: 1.5, 

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
