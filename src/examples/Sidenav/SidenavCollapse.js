/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

// Custom styles for the SidenavCollapse
import {
  collapseIcon,
  collapseIconBox,
  collapseItem,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";

// Soft UI Dashboard React context
import { ExpandCircleDown, ExpandLessRounded } from "@mui/icons-material";
import { useSoftUIController } from "context";
import CustomizedDialogs from "examples/Sidenav/NewSpacePopUp/popupNewspace";
import { NavLink } from "react-router-dom";
import SidenavCard from "./SidenavCard";
import { spaceRoutes } from './sidebarSpaceRoutes';

function SidenavCollapse({ color, icon, name, children, active, noCollapse, open, ...rest }) {
var n = 0;
var count = 'Task 1' ;
  const [controller] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const [on, setOpen] = React.useState(false);
  const data = [
    {
      spaceName:'Space 1',
      subspaceCount:3,
      subspaceName:['TASK1','TASK2','TASK3']
    },
    {
      spaceName:'Space 2',
      subspaceCount:2,
      subspaceName:['TASK1','TASK2']
    },
    {
      spaceName:'Space 3',
      subspaceCount:4,
      subspaceName:['TASK1','TASK2','TASK3','TASK4']
    },

  ]
  const handleClick = () => {
    setOpen(!on);
  };


if(name === "Profile"){
  return (

    <>
    <Collapse in={on}  timeout="auto" unmountOnExit>
    <SoftBox>
    <NavLink to='/profile' style={{color:'aliceblue'}}>
       <SoftButton style={{marginLeft:'15px'}} color='info'>
      
        <div style={{display:'block'}}>
          Settings
        </div>
       </SoftButton></NavLink>
       {/* <NavLink to='/authentication/sign-in' style={{color:'aliceblue'}}> */}
       <SoftButton style={{display:'block',marginLeft:'15px',paddingRight:'30%'}} color='error' onClick={()=>{rest.setAuthToken(false)}}>
       
        <div style={{marginLeft:'8px',textAlign:'center'}}>
          Logout
        </div>
        </SoftButton>
       {/* </SoftButton></NavLink> */}
      </SoftBox>
      
     </Collapse>
      <SoftBox component="profile" timeout="auto" unmountOnExit>
        <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })} onClick={handleClick}>
          
            <ListItemIcon
            sx={(theme) => collapseIconBox(theme, { active, transparentSidenav, color })}
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name} 
            sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
          />
          
          
          {on ? <ExpandCircleDown/> : <ExpandLessRounded/>}
          </SoftBox>
      </SoftBox>
      
    </> 
  );
      }
      else{
        if(name === "Spaces"){
        return (
          <>
         {/* Functionality for spaces */}
         <SoftBox sx={{width:'220px'}} >
              <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })} onClick={handleClick}>
                
                  <ListItemIcon
                  sx={(theme) => collapseIconBox(theme, { active, transparentSidenav, color })}
                >
                  {typeof icon === "string" ? (
                    <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
                  ) : (
                    icon
                  )}
                </ListItemIcon>
      
                <ListItemText
                  primary={name} 
                  sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
                />
                 {on? <ExpandLessRounded/> : <ExpandMoreIcon/>}
              </SoftBox>
              </SoftBox>


            <Collapse in={on}  timeout="auto" unmountOnExit>
            <div className="CreateSpace">
                <CustomizedDialogs>
                </CustomizedDialogs>
            </div>
            {/* <SoftBox>
            <SoftButton onClick={()=>{
                <div className="CreateSpace">
                <CustomizedDialogs>
                </CustomizedDialogs>
            </div>
            }}color='secondary' sx={{display:'block',margin:'10px auto 2px 20px',paddingLeft:'10px'}} >
              <div style={{margin:'-20px 0px -30px 25px',fontSize:'15px',textAlign:'center',textTransform:'capitalize'}}>
             
              <IconButton  color='light' size="large" sx={{marginRight:'0',paddingRight:'0'}}>
        <AddIcon/>
      </IconButton > Add New Space
              </div>
             </SoftButton>
             </SoftBox> */}
{/* Functionality for subspaces */}
           <NavLink to="/boards">
           {spaceRoutes.map((e,i)=>(
            <SidenavCard space={e.spaceName} key={i} id={i} data={spaceRoutes} subspace = {e.subspaceName}></SidenavCard>))}
           </NavLink>
          </Collapse>
          </>
        );
      
      }
        else{
          return (
            <>
              <ListItem component="li">
                <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })}>
                  
                    <ListItemIcon
                    sx={(theme) => collapseIconBox(theme, { active, transparentSidenav, color })}
                  >
                    {typeof icon === "string" ? (
                      <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
                    ) : (
                      icon
                    )}
                  </ListItemIcon>
        
                  <ListItemText
                    primary={name}
                    sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
                  />
                </SoftBox>
              </ListItem>
              {children && (
                <Collapse in={open} unmountOnExit>
                  {children}
                </Collapse>
               
              )}
            </>
          );
        }
      }
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  color: "info",
  active: false,
  noCollapse: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
};

export default SidenavCollapse;
