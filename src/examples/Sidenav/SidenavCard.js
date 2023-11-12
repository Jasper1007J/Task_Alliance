
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberSmartRecordRoundedIcon from '@mui/icons-material/FiberSmartRecordRounded';
import LayersIcon from '@mui/icons-material/Layers';
import Collapse from "@mui/material/Collapse";
import React from 'react';
// Soft UI Dashboard React components
import { ExpandLessRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import Boards from 'layouts/boards';
import { NavLink } from 'react-router-dom';
import CustomizedSubDialogs from './NewSubSpacePopUp/popupNewsubspace';

export default function SidenavCard(props){
  const [onto,setOn] = React.useState(false);
  const subspace = props.subspace;
  var n = 1;
  const handleSubSpace = () =>{
    setOn(!onto);
   }

   const handleSpace = () => {
    n = n+1;
  }
  return(
    <>
    <SoftBox component="profile" timeout="auto" unmountOnExit>
    <SoftButton size="small" color="info" sx={{display:'flex',margin:'0px auto 2px 20px',paddingLeft:'2%',width:'210px',height:'10px',backgroundColor:'deepskyblue',border:'none'}}  onClick={handleSubSpace}>
      <IconButton size="large" color="light"  sx={{float:'left',paddingRight:'5%',marginLeft:'25px'}} >
      <FiberSmartRecordRoundedIcon  sx={{width:'20px',height:'20px'}}/>
      </IconButton>
       <div style={{padding:'auto 35px auto 10px',marginRight:'90px', textAlign:'left',textTransform:'capitalize',width:'200px',color:'navyblue'}}>{props.space}       </div>
      {onto ? <ExpandLessRounded  color="light" sx={{width:'20px',height:'20px',paddingRight:'0',marginRight:'0'}}/> : <ExpandMoreIcon color="light" sx={{width:'20px',height:'20px',paddingRight:'0',marginRight:'0'}}/>}
    </SoftButton>
   
  </SoftBox>


  <Collapse in={onto}  timeout="auto" unmountOnExit>
  {/* <SoftBox>
  <SoftButton color='dark'  sx={{display:'block',margin:'0px auto 2px 20px',paddingLeft:'2%',width:'210px',height:'10px',backgroundColor:'steelblue'}} size="small" onClick={handleSpace}>
    <div style={{margin:'-10px 0px -10px 0px',paddingTop:'0',fontSize:'12px',textAlign:'center',fontWeight:'light',textTransform:'lowercase'}}>
   
    <IconButton color='light' sx={{marginRight:'0',paddingRight:'0'}}>
<AddIcon  sx={{width:'20px',height:'20px'}}/>
</IconButton>  Add  SubSpace
    </div>
   </SoftButton>
   </SoftBox> */}
   <CustomizedSubDialogs id={props.id}></CustomizedSubDialogs>

   {subspace.map((e)=>(
    <NavLink to="/boards" key={Boards}>
    <SoftButton color='light'  sx={{display:'block',margin:'0px auto 2px 20px',paddingLeft:'2%',width:'210px',height:'10px',backgroundColor:'lavender'}} size="small" key={subspace}>
    <div style={{margin:'-10px 0px -10px 0px',paddingTop:'0',fontSize:'12px',textAlign:'left',fontWeight:'light',color:'darkslategrey'}}>
   
    <IconButton color='black' sx={{marginRight:'0',paddingRight:'0',color:'darkslategray'}}>
<LayersIcon sx={{width:'20px',height:'20px'}}/>
</IconButton>  {e}
    </div>
   </SoftButton>
   </NavLink>
   ))}
</Collapse>
</>
  )

}