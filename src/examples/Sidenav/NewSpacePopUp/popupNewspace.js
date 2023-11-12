import CloseIcon from '@mui/icons-material/Close';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import SoftButton from 'components/SoftButton';
import * as React from 'react';
import { spaceRoutes } from '../sidebarSpaceRoutes';
import logo from './globe.png';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const mystyle = {
  fontSize:16,
  marginLeft:30,
  marginBottom:0
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [spaceName,setSpaceName]= React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onCreateSpace = () => {
   // const spaceData = [...spaceRoutes]
let spaceRoute ={spaceName:spaceName,
subspaceCount:0,
subspaceName:[]}
spaceRoutes.push(spaceRoute)

    setOpen(false);
    setS
  };

  return (
    <div>
      <SoftButton variant="contained" onClick={handleClickOpen} sx={{margin:'10px auto 10px 20px',paddingLeft:'40px',paddingRight:'50px'}}>
           + Add New Space
      </SoftButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{
          m:0,
          alignContent: 'center' ,
          textAlign:'center'
          }} id="customized-dialog-title">
          <img src={logo} alt='globe' width={550} height={300}></img>
          <Typography>Create New Space</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 30,
            top: 20,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <div>
          <p style={mystyle}>Space Name</p>
        </div>
      <TextField fullWidth variant='outlined' label='Space Name' value={spaceName} onChange={(e)=>setSpaceName(e.target.value)} />
        <Button autoFocus onClick={onCreateSpace} 
          sx={{
            m: 1,
            fontSize:18,
            marginLeft:3.38,
            marginBottom:4,
            p: 1.2,
            width: 490,
            maxWidth: '100%',
            alignContent:'center',
            backgroundColor:'whitesmoke',
          }}>
            Create Space
          </Button>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
