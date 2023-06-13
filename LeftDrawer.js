import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

import { useTheme } from '@mui/material';



const LeftDrawer = () => {

    const menuItemStyles = {
       
        
        subMenuContent: {
            backgroundColor: '#0b2948',
            
        },
        
        button: {
                "&:hover": {
                    backgroundColor: '#0b2948',
                    color: "white",
                    fontWeight: "bold"
                },
                
            
            },
      };

    



   const theme = useTheme()

   

    return (
        <div style={{ display: 'flex', width: '250px', position: 'fixed', overflowY: 'auto',
        maxHeight: '100%'}}  className="drawer">

             <Sidebar backgroundColor={theme.palette.primary.dark}>
                
                 <Menu
                 menuItemStyles={menuItemStyles}
                 >

                    <div className='menu1' >
                        <h2>iNEED</h2>
                    </div>

                    <div className='menu2' >
                        <p1>MENU</p1>
                    </div>


                    <SubMenu  className='navi' icon={<SupervisorAccountOutlinedIcon />} label="Dashboard">
                        <MenuItem >Analytics</MenuItem>
                        <MenuItem >CRM</MenuItem>
                        <MenuItem>Ecommerce</MenuItem>
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>

                    <SubMenu className='navi' icon={<GridViewOutlinedIcon />} label="Apps">
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>

                    <MenuItem className='navi' icon={<SpaceDashboardOutlinedIcon />}>Layouts</MenuItem>

                    <div className='menu2' >
                        <p1>PAGES</p1>
                    </div>


                    <SubMenu className='navi' icon={<AccountCircleOutlinedIcon />} label="Authentication">
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>

                    <SubMenu className='navi' icon={<ArticleOutlinedIcon />} label="Pages">
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>

                    <SubMenu className='navi' icon={<RocketOutlinedIcon />} label="Landing">
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>

                    <div className='menu2' >
                        <p1>COMPONENTS</p1>
                    </div>

                    <SubMenu className='navi' icon={<DesignServicesOutlinedIcon />} label="Base UI">
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>

                    <SubMenu className='navi' icon={<FeedOutlinedIcon />} label="Forms">
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>

                    <SubMenu className='navi' icon={<BarChartOutlinedIcon />} label="Charts">
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>

                    <SubMenu className='navi' icon={<FmdGoodOutlinedIcon />} label="Maps">
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>

                    <SubMenu className='navi' icon={<ShareOutlinedIcon />} label="Multi Level">
                        <MenuItem>Crypto</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>NFT</MenuItem>
                        <MenuItem>Job</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
             
     );
}



 
export default LeftDrawer;