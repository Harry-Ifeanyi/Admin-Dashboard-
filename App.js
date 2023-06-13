import './App.css';
import{ BrowserRouter as Router /* Route Switch*/} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Layout from './Layout';
import Body from './Body';
import { ProSidebarProvider } from "react-pro-sidebar";


function App() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ProSidebarProvider>
      <Router>
        <Layout>
        <Body />                
        </Layout> 
      </Router>
    </ProSidebarProvider>
  </ThemeProvider>
  
  ); 
}


export default App;
