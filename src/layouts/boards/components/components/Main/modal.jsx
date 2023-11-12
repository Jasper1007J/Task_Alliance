import { Add, CalendarMonthRounded, DoneRounded, EventAvailableRounded, FlagRounded, PriorityHighRounded } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InfoIcon from '@mui/icons-material/Info';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Avatar, AvatarGroup, Breadcrumbs, Button, Fab, IconButton, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import SoftButton from 'components/SoftButton';
import { useState } from 'react';
import Modal from 'react-modal';
import SplitButton from './SplitButton';
import './model.css';
Modal.setAppElement('#root'); // Set the root element for accessibility

function Model() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const gridContainerStyles = {
    marginLeft:'70px',
    display: 'flex',
    zIndex:'-1',
    justifycontent:'space-between',
    
  };
  const gridItemStyles = {
    // backgroundcolor:'white',
    zIndex:'10000',
    position:'fixed',
    height:'70px',
    width:'1512px',
    border:'1px Solid #dcdcdc', 
    marginLeft:'-90px',
    marginTop:'-20px',
    //borderBottom: '1px solid grey',
  };

   const gridItemStyles2 = {
    // backgroundcolor:'white',
    position:'fixed',
    width:'900px',
    height:'70px',
    border: '1px solid #dcdcdc',
    margin: '5px',
    marginTop:'60px',
    marginLeft:'-90px',
    borderTop:'1px',
  };
  const gridItemStyles3 = {
    textAlign:'left',
    // backgroundcolor:'white',
    position:'fixed',
    width:'640px',
    height:'70px',
    border: '1px solid #dcdcdc',
    margin: '5px',
    marginTop:'60px',
    marginLeft:'781px',
    borderLeft:'1px',
    borderTop:'1px',
  };
  const gridItemStyles4 = {
    position:'fixed',
    // backgroundcolor:'white',
    border: '1px solid #dcdcdc',
    height:'500px',
    width:'900px',
    marginTop:'110px',
    zIndex:'-1',
    marginLeft:'-90px',
    borderTop:'1px',
  };
  const gridItemStyles5 = {
    // backgroundcolor:'white',
    position:'fixed',
    // border: '1px solid #dcdcdc',
    margin: '5px',
    marginTop:'130px',
    marginLeft:'820px',
    height:'500px',
    width:'640px',
    borderTop:'1px',
    borderLeft:'1px ',
  };
  const gridItemStyles6 = {
    // backgroundcolor:'white',
    position:'fixed',
    width:'900px',
    paddingLeft:'10px',
    height:'68px',
    border: '1px solid #dcdcdc',
    margin: '5px',
    marginTop:'610px',
    marginLeft:'-90px',
    borderTop:'1px ',
    borderBottom:'1px',
    borderRight:'none',
  };
  const gridItemStyles7 = {
    // backgroundcolor:'white',
    padding:'10px',
    position:'fixed',
    boxShadow:'0px -5px 9px 0px rgba(92, 78, 78, 0.2)',
    width:'611px',
    height:'68px',
    margin: '5px',
    marginTop:'610px',
    marginLeft:'809px',
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  return (
    <div className='modelcontainer'>
      <IconButton className='buttonc' onClick={openModal} size='large'> 
        <InfoIcon/>
        </IconButton>

      <Modal id='classone'
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className='model'>
        <div style={gridContainerStyles}>
          <div className="grid-item" style={gridItemStyles}>
            <Breadcrumbs aria-label="breadcrumb" id='topbox'>
              <Typography variant="caption" color="text.primary" style={{fontSize:'16px'}}>Spaces</Typography>
              <Typography variant="caption" color="text.primary" style={{fontSize:'16px'}}>Spaces</Typography>
              <Typography variant="caption" color="text.primary" style={{fontSize:'16px'}}>Spaces</Typography>
            </Breadcrumbs>
            {/* <button id='button1'><a>Team space</a> <a>projects</a><a>project2</a><p> 1 0f 1</p></button> */}
            {/* Content for grid item 1 in the first grid */}
            <SoftButton onClick={closeModal} className='close_button' size="small">X</SoftButton>
        </div>
        </div>
        <div style={gridContainerStyles}>
        <div className="grid-item" style={gridItemStyles2}>
            <SplitButton options={['To Do','In Progress','Complete']} className='splitbutton'/>
            <Fab  id='complet' size='medium' aria-label='Priority'><DoneRounded fontSize='medium'/></Fab> 
            <AvatarGroup id='rt'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <Add sx={{background:'white',borderRadius:'50%'}}/>
                }
              >
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </Badge>
            </AvatarGroup>
            {/* <Fab  id='ackt' size='medium' aria-label='Priority'><PriorityHighRounded fontSize='small'/></Fab> */}
          {/* Content for grid item 2 in the first grid */}
        </div>




        <div className="grid-item" style={gridItemStyles3}>
            <div className='created'>created <IconButton className='calender_icon' >
            <RemoveRedEyeIcon color='info'/></IconButton></div>
            <div className='date_time'>Nov 5 , 4:30 PM</div>
            {/* <h2>time tracked</h2> */}

          {/* Content for grid item 1 in the first grid */}
        </div>

        </div>
        <div>
        <div style={gridContainerStyles} >
        <div className="grid-item" style={gridItemStyles4} overflow>
            <input  id='task' type='text' placeholder={`TASK`} style={{width:'100%',zIndex:'-1'}}/>
            <textarea placeholder={`write something or type '/' for commands`} id='textarea'/>
            <h2 id='todo'>To Do</h2>
            <p id='subtask'>Sub Tasks</p><br></br>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly', border:'1px solid grey', borderRadius:'4px'}}>
              <input type='text' id='lastcommand' placeholder={`Task Name or type '/' for commands`} style={{width:'65%',fontSize:'large',outline:'none',border:'none',padding:'1%'}} 
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave} />
               {
               <div>
              <Fab size='small' aria-label='Set Start Date' style={{marginRight:'5px'}}><CalendarMonthRounded fontSize='small'/></Fab>
              <Fab size='small' aria-label='Set Due Date' style={{marginRight:'5px'}}><EventAvailableRounded fontSize='small'/></Fab>
              <Fab size='small' aria-label='Priority'  style={{marginRight:'5px'}}><PriorityHighRounded fontSize='small'/></Fab>
              <Fab size='small' aria-label='Priority' style={{marginRight:'5px'}}><FlagRounded fontSize='small'/></Fab>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <Add sx={{background:'grey',borderRadius:'50%'}}/>
                }
              >
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </Badge>
              <Button variant="contained" size='small'  sx={{width:'5%',marginLeft:'20px'}}>Save</Button>
              </div>}
            </div>
          {/* Content for grid item 1 in the first grid */}
        </div>
        <div className="grid-item" style={gridItemStyles5}>
            <p> Add the content here</p>
          {/* Content for grid item 1 in the first grid */}
        </div>

        </div>
        <div style={gridContainerStyles}>
        <button className="cloud-upload" style={gridItemStyles6}>
        <CloudUploadIcon color='secondary' className='cloud_icon'/>   
        <div>Drop your files here to attach or <a href=''>Browse</a></div>
          {/* Content for grid item 1 in the first grid */}
        </button>
        <div style={gridItemStyles7}>
        <input className="comments"  placeholder='Comment or type "/" for commands'>
       
          
          {/* Content for grid item 1 in the first grid */}
        </input> <ModeCommentIcon className='comment_icon'/></div>
        
        </div>
        </div>
        </div>
      </Modal>
    </div>
  );
}

export default Model;