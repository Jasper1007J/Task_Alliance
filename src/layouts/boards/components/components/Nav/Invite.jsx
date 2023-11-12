import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import './invite.css'


function Invite () {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 0,
    outline: 0,
    borderRadius : '10px',
    boxShadow: 24,
    p: 4,

  }
    return (
      <>
        <div className="kanban__nav-avs-add" onClick={handleOpen}>
          <i className="material-icons">add</i>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h7" component="h2" sx={{fontStyle:'roboto', fontWeight:'bold',color:'black',lineHeight:0.5}}>
              Invite
            </Typography>
            <Typography id="modal-sub" variant="h7" component="h8" sx={{fontSize:'10px', fontStyle:'italic', fontWeight:400, lineHeight:1}}>
              New members will get access to public Spaces,Docs and Dashboards.
            </Typography>
             <Typography sx={{fontSize:15,lineHeight:2,fontStyle:'roboto', fontWeight:'bold',color:''}}>
              Invite by Mail
              </Typography>
           <input type="text" placeholder="Enter the mail" style={{outline:'none',borderRadius:'6px',border:'1px solid black',padding:'2%',fontSize:'70%',width:'100%'}}/>
          <Typography id="modal-sub-1" variant="h7" component="h8" sx={{fontSize:'10px', fontStyle:'italic', fontWeight:400}}>
              New members will get access to public Spaces,Docs and Dashboards.
            </Typography>
            <Typography>
            <Button id="button" onClick={()=>{handleClose()}} style={{color:'black',marginLeft:197}}>cancel</Button>
            <Button id="button2" onClick={()=>{handleClose()}} style={{background:'green',color:'white',textAlign:'center',marginLeft:3}}>Invite</Button>
            </Typography>
            
          </Box>
        </Modal>
      </>
    );
}

export default Invite;
