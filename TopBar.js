import { Box, Toolbar, Typography} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import Badge from '@mui/material/Badge';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';




const TopBar = () => {

   const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.primary.normal, 0.5),
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.normal, 0.3),
      },
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(3),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'primary.dark',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    }
    
    ));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));

    

    

    return (
        <AppBar sx={styles.appbar}
        elevation={0}>
           <Toolbar>
            <IconButton sx={{ml: '1px'}} size="large">
                  <MenuRoundedIcon />
            </IconButton>

            <Search className='searcher'>
                  <SearchIconWrapper>
                  <SearchIcon sx={{color: 'primary.dark'}} />
                  </SearchIconWrapper>
                  <StyledInputBase className='search'
                  placeholder= "Search..." />
            </Search>

            <Box sx={{ flexGrow: 1 }}>
            </Box>


            <IconButton sx={{ml: '1px'}} size="large">
                  <WidgetsOutlinedIcon />
            </IconButton>

            <IconButton sx={{ml: '1px'}} size="large">
               <Badge badgeContent={4} color="success">
                  <ShoppingBagOutlinedIcon />
               </Badge>
            </IconButton>

            <IconButton sx={{ml: '1px'}} size="large">
                  <FullscreenOutlinedIcon />
            </IconButton>

           <IconButton sx={{ml: '1px'}} size="large">
                  <BedtimeOutlinedIcon />
            </IconButton>

            <IconButton sx={{ml: '1px', mr:'40px'}} size="large">
               <Badge badgeContent={4} color="error">
                  <NotificationsNoneRoundedIcon />
               </Badge>
            </IconButton>


           

               
            <Card sx={styles.card}>
               <CardHeader avatar={<Avatar  src='/public/avatar.2.png' sx={{ width: 30, height: 30,  }} />} 
                       title= {<Typography variant='body2'>Harry Ifeanyi</Typography>}
                       subheader= {<Typography variant='subtitle2'>Admin</Typography>}
               />
            </Card>

           </Toolbar>
        </AppBar>
     );
}

/** @type {import("@mui/material").SxProps}  */
const styles = {
   appbar: {
       width: 'calc(100% - 250px)',
       bgcolor: 'primary.main'
   },

   card: {
      bgcolor: 'primary.normal',
      borderRadius: 0,
      boxShadow: 0
   }

   
}
 
export default TopBar;