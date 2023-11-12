import ClassNames from "classnames";
import React from 'react';
import { connect } from "react-redux";
import { deleteTask } from "../../actions/";
import dragging from "../../hoc/dragging";
// import { Modal } from "bootstrap";
import Modal from './modal';
//import Modal from 'react-modal';
import { Breadcrumbs, Divider, Menu, MenuItem} from "@mui/material";
import SoftTypography from "components/SoftTypography";
import { MoreHoriz, Add, Delete } from "@mui/icons-material";
class Card extends React.Component {
  state = {
    isModalOpen : false,
    anchorEl: null,
  }
  openModal() {
    this.setState({isModalOpen : true})
  };
  closeModal(){
    this.setState({isModalOpen : false});
  }
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { data, dragging, forDragStart } = this.props;
    const style = ClassNames("card-container-color", data.style);
    const dragAndDrop = ClassNames({
      card: true,
      "card-dragging": dragging
    });
    const gridContainerStyles = {
      display: 'flex',
      justifycontent:'space-between',
    };
    const gridItemStyles = {
      position:'fixed',
      height:'60px',
      width:'1453px',
      border:'1px Solid #dcdcdc', 
      marginLeft:'-20px',
      marginTop:'-20px',
      borderBottom: '1px solid grey',
    };
  
     const gridItemStyles2 = {
      position:'fixed',
      width:'800px',
      height:'70px',
      border: '1px solid #dcdcdc',
      margin: '5px',
      marginTop:'40px',
      marginLeft:'-20px',
      borderTop:'1px',
    };
    const gridItemStyles3 = {
      position:'fixed',
      width:'653px',
      height:'70px',
      border: '1px solid #dcdcdc',
      margin: '5px',
      marginTop:'40px',
      marginLeft:'781px',
      borderLeft:'1px solid #dcdcdc',
      borderTop:'1px',
    };
    const gridItemStyles4 = {
      position:'fixed',
      
      border: '1px solid #dcdcdc',
      height:'450px',
      width:'800px',
      marginTop:'110px',
      marginLeft:'-20px',
    };
    const gridItemStyles5 = {
      position:'fixed',
      border: '1px solid #dcdcdc',
      margin: '5px',
      marginTop:'110px',
      marginLeft:'781px',
      height:'450px',
      width:'652px',
      borderTop:'1px'
    };
    const gridItemStyles6 = {
      position:'fixed',
      width:'800px',
      height:'51px',
      border: '1px solid #dcdcdc',
      margin: '5px',
      marginTop:'560px',
      marginLeft:'-20px',
      //borderLeft:'1px solid ',
      borderTop:'1px',
      borderBottom:'1px',
      borderLeft:'1px',
    };
    const gridItemStyles7 = {
      position:'fixed',
      width:'653px',
      height:'51px',
      border: '1px solid #dcdcdc',
      margin: '5px',
      marginTop:'560px',
      marginLeft:'781px',
      //borderLeft:'1px solid ',
      borderTop:'1px',
      borderBottom:'1px',
      borderLeft:'1px',
    };
    const open = Boolean(this.state.anchorEl);
    return (
      <>
      <div className={dragAndDrop} onClick={()=>{this.openModal()}} draggable="true" onDragStart={forDragStart} style={{padding:'8px',margin:'10px',background:'white',boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.2)'}}>
        <div className="card_header" style={{paddingLeft:'8px', marginRight:'0'}}>
          <Breadcrumbs aria-label="breadcrumb">
            <SoftTypography variant="caption" color="text.primary">Spaces</SoftTypography>
            <SoftTypography variant="caption" color="text.primary">Space</SoftTypography>
            <SoftTypography variant="caption" color="text.primary">Space1</SoftTypography>
          </Breadcrumbs>
        </div>
        <div className="card__header">
          <div className={style}>
            <div className="card__header-priority">{data.priority}</div>

          </div>
          <div style={{marginLeft:'0'}}>
          <Modal
            isOpen={this.isModalOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <div>
          <div style={gridContainerStyles}>
            <div className="grid-item" style={gridItemStyles}>
              {/* Content for grid item 1 in the first grid */}
           </div>
            </div>
            <div style={gridContainerStyles}>
            <div className="grid-item" style={gridItemStyles2}>
                <h1>hello</h1>
              {/* Content for grid item 2 in the first grid */}
            </div>
            <div className="grid-item" style={gridItemStyles3}>
                <h2>hello</h2>
              {/* Content for grid item 1 in the first grid */}
            </div>
            </div>
            <div>
            <div style={gridContainerStyles}>
            <div className="grid-item" style={gridItemStyles4}>
                <h2>hello</h2>
              {/* Content for grid item 1 in the first grid */}
            </div>
            <div className="grid-item" style={gridItemStyles5}>
                <h2>hello</h2>
              {/* Content for grid item 1 in the first grid */}
            </div>
            </div>
            <div style={gridContainerStyles}>
            <div className="grid-item" style={gridItemStyles6}>
                <h2>hello</h2>
              {/* Content for grid item 1 in the first grid */}
            </div>
            <div className="grid-item" style={gridItemStyles7}>
                <h2>hello</h2>
              {/* Content for grid item 1 in the first grid */}
            </div>
            
            </div>
            </div>
            </div>
          </Modal>
          </div>
        </div>
        <div className="card__text" contentEditable='true'>{data.text}</div>
        <SoftTypography variant="caption" sx={{paddingLeft:'12px', paddingTop:'10px', color:'red'}}>{data.dueDate.getDate()+ "-" + data.dueDate.getMonth() + "-" + data.dueDate.getFullYear()}</SoftTypography>
        <div className="card__menu">
          <div className="card__menu-left">
            <div className="img-avatar">
              <img src={data.avatar} />
            </div>
            <Add sx={{cursor:'pointer'}}/>
          </div>
          <div className="card__menu-right">
            <MoreHoriz 
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={this.handleClick}
              sx={{cursor:'pointer'}}
            />
            <Menu
              id="basic-menu"
              anchorEl={this.state.anchorEl}
              open={open}
              onClose={this.handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem key="1" onClick={()=>{this.handleDelete();this.handleClose()}}><Delete sx={{marginRight:'5px'}}/>Delete</MenuItem>
              <MenuItem key="2" onClick={this.handleClose}>My account</MenuItem>
              <MenuItem key="3" onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  handleDelete = () => {
    const { data, deleteTask } = this.props;
    deleteTask(data.id);
  };


  }
export default connect(
  null,
  { deleteTask }
)(dragging(Card));


