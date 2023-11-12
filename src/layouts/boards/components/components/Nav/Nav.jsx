import React from 'react';
import './Nav.css';
import Team from './Team.jsx';
import Title from './Title.jsx';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import FilterListIcon from '@mui/icons-material/FilterList';
import SaveIcon from '@mui/icons-material/Save';
import BlockIcon from '@mui/icons-material/Block';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GroupIcon from '@mui/icons-material/Group';
// ... and so on for other icons

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownVisible: false,
      isDropdownVisible1: false,
      isDropdownVisible2: false,
      taskName: true,
      taskDescription: false,
      isHovered: false,
      isHovered1: false,
      isHovered2: false,
    };
  }

  toggleDropdown = () => {
    this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
  };
  toggleDropdown1 = () => {
    this.setState({ isDropdownVisible1: !this.state.isDropdownVisible1 });
  };
  toggleDropdown2 = () => {
    this.setState({ isDropdownVisible2: !this.state.isDropdownVisible2 });
  };
  toggleDropdown3 = () => {
    this.setState({ isDropdownVisible3: !this.state.isDropdownVisible3 });
  };
  toggleDropdown4 = () => {
    this.setState({ isDropdownVisible4: !this.state.isDropdownVisible4 });
  };
  toggleDropdown5 = () => {
    this.setState({ isDropdownVisible5: !this.state.isDropdownVisible5 });
  };
  handleSetTaskName = () => {
    this.setState({ taskName: !this.state.taskName });
  };
  handleSetTaskDescription = () => {
    this.setState({ taskDescription: !this.state.taskDescription });
  };
  handleSetAutoSave = () => {
    this.setState({ autoSave: !this.state.autoSave });
  };
  handleSetNone = () => {
    this.setState({
      autoNone: !this.state.autoNone, // Toggle autoNone between true and false
    });
  }
  handleSetAssignee = () => {
    this.setState({
      assignee: !this.state.assignee, // Toggle autoNone between true and false
    });
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };
  handleMouseEnter1 = () => {
    this.setState({ isHovered1: true });
  };
  handleMouseEnter2 = () => {
    this.setState({ isHovered2: true });
  };
  handleMouseEnter3 = () => {
    this.setState({ isHovered3: true });
  };
  handleMouseEnter4 = () => {
    this.setState({ isHovered4: true });
  };
  handleMouseEnter5 = () => {
    this.setState({ isHovered5: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };
  handleMouseLeave1 = () => {
    this.setState({ isHovered1: false });
  };
  handleMouseLeave2 = () => {
    this.setState({ isHovered2: false });
  };
  handleMouseLeave3 = () => {
    this.setState({ isHovered3: false });
  };
  handleMouseLeave4 = () => {
    this.setState({ isHovered4: false });
  };
  handleMouseLeave5 = () => {
    this.setState({ isHovered5: false });
  };


  render() {
    const { isDropdownVisible, isDropdownVisible1, isDropdownVisible2, isDropdownVisible3,isDropdownVisible4,isDropdownVisible5, taskName, autoSave,autoNone,assignee, taskDescription, isHovered, isHovered1, isHovered2, isHovered3,isHovered5,isHovered4 } = this.state;


    return (
      <div>
        <nav style={{ border: '1px solid black', boxShadow: '0px 0px 5px 0px black', top: '90px', left: '35px', height: '35px', width: '93%', position: 'absolute', borderRadius: '10px' }}>
          <section>
            <div className="zsearch-container">
              <div style={{ fontSize: '20px', fontWeight: 'bolder', top: '5px', left: '10px', width: '30px', height: '30px', position: 'absolute', color: 'black', zIndex: '999', backgroundColor: 'transparent' }}>
                <SearchIcon />
              </div>
              <input type="text" placeholder="Search..." style={{ border: 'none', outline: 'none', height: '25px', top: '5px', fontSize: '12px', left: '35px', width: '200px', zIndex: '998', position: 'absolute', backgroundColor: 'transparent' }} />
              <div style={{ cursor: 'pointer', top: '3px', left: '235px', position: 'absolute', borderRadius: '5px', padding: '5px 5px 5px 5px', height: '30px', width: '30px', backgroundColor: isHovered ? '#d7d6d6' : 'transparent' }}>
                <p style={{ top: '-5px', left: '7px', position: 'absolute' }} onClick={this.toggleDropdown} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>...</p>
              </div>
              {isDropdownVisible && (
                <div>
                  <div style={{ width: '190px', height: '150px', top: '40px', left: '240px', border: '2px solid #d7d6d6', boxShadow: '5px 5px 10px #d7d6d6', zIndex: '997', position: 'absolute', backgroundColor: 'white', borderRadius: '10px' }}>
                    <p style={{ fontSize: '12px', color: '#969698', padding: '5px 5px' }}>SEARCH IN</p>
                    <SoftBox display="flex" alignItems="center">

                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={this.handleSetTaskName}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        &nbsp;&nbsp;Task Name
                      </SoftTypography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Switch checked={taskName} onChange={this.handleSetTaskName} />
                    </SoftBox>
                    <SoftBox display="flex" alignItems="center">

                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={this.handleSetTaskDescription}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        &nbsp;&nbsp;Task Description
                      </SoftTypography>&nbsp;&nbsp;&nbsp;&nbsp;
                      <Switch checked={taskDescription} onChange={this.handleSetTaskDescription} />

                    </SoftBox>
                  </div>
                </div>
              )}
              <div style={{ cursor: 'pointer', top: '1.8px', borderRadius: '5px', right: '300px', position: 'absolute', fontSize: '12px', width: '50px', height: '30px', backgroundColor: isHovered1 ? '#d7d6d6' : 'transparent' }}>
                <p style={{ left: '1.5px', position: 'absolute', top: '7px', }} onMouseEnter={this.handleMouseEnter1} onMouseLeave={this.handleMouseLeave1}><FilterListIcon /></p>
                <p style={{ top: '5px', left: '15px', position: 'absolute', zIndex: '998' }} onClick={this.toggleDropdown1} onMouseEnter={this.handleMouseEnter1} onMouseLeave={this.handleMouseLeave1}> &nbsp;Filter</p>
              </div>
              {isDropdownVisible1 && (
                <div>
                  <div style={{ width: '600px', height: '180px', top: '40px', left: '400px', position: 'absolute', border: '2px solid #d7d6d6', boxShadow: '5px 5px 10px #d7d6d6', zIndex: '997', backgroundColor: 'white', borderRadius: '10px' }}>
                    <h1 style={{ fontSize: '20px', padding: '15px 30px' }}>Filters</h1>
                    <p style={{ padding: '1px 30px', fontSize: '12px' }}>+ Add Filter</p>
                  </div>
                </div>
              )}
              <div style={{ cursor: 'pointer', top: '3px', right: '10px', position: 'absolute', borderRadius: '3px', height: '30px', width: '30px', backgroundColor: isHovered2 ? '#d7d6d6' : 'transparent' }}>
                <p style={{ top: '-6px', left: '7px', position: 'absolute' }} onClick={this.toggleDropdown2} onMouseEnter={this.handleMouseEnter2} onMouseLeave={this.handleMouseLeave2}>...</p>
              </div>
              {isDropdownVisible2 && (
                <div>
                  <div style={{ width: '210px', height: '250px', top: '37px', right: '10px', border: '2px solid #d7d6d6', boxShadow: '5px 5px 10px #d7d6d6', zIndex: '997', position: 'absolute', backgroundColor: 'white', borderRadius: '5px' }}>
                    <span style={{ fontSize: '12px', color: '#969698', padding: '5px 10px' }}>VIEW SETTINGS</span>
                    <span style={{ fontSize: '12px', color: '#969698', padding: '5px 10px', textDecoration: 'underline' }}><a style={{ color: '#969698', textDecoration: 'underline' }} href='#'>View defaults</a></span>

                    <SoftBox display="flex" alignItems="center">

                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={this.handleSetAutoSave}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        &nbsp;&nbsp;<SaveIcon /> &nbsp;&nbsp;Autosave view
                      </SoftTypography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Switch checked={autoSave} onChange={this.handleSetAutoSave} />
                    </SoftBox>
                    <div style={{ border: '1px solid #d7d6d6', position: 'absolute', width: '100%', top: '80px' }}></div>

                  </div>
                </div>
              )}
              <div style={{ cursor: 'pointer', top: '1.8px', right: '180px', position: 'absolute', borderRadius: '5px', padding: '5px 5px 5px 5px', height: '30px', width: '110px', backgroundColor: isHovered3 ? '#d7d6d6' : '#dadaf5' }}>
                <p style={{ top: '5px', left: '7px', position: 'absolute', fontSize: '12px' }} onClick={this.toggleDropdown3} onMouseEnter={this.handleMouseEnter3} onMouseLeave={this.handleMouseLeave3}>Group By: Status</p>
              </div>
              {isDropdownVisible3 && (
                <div>
                  <div style={{ width: '130px', height: '250px', top: '40px', right: '170px', border: '2px solid #d7d6d6', boxShadow: '5px 5px 10px #d7d6d6', zIndex: '997', position: 'absolute', backgroundColor: 'white', borderRadius: '10px' }}>
                    <p style={{ fontSize: '12px', color: '#969698', padding: '10px 10px' }}>GROUP BY &nbsp;  <span style={{ fontSize: '14px', top: '5px', position: 'absolute' }}><HelpOutlineIcon /></span></p>
                    <SoftBox display="flex" alignItems="center">

                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={this.handleSetNone}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        &nbsp;&nbsp;<span style={{top:'42px',position:'absolute'}}><BlockIcon /></span> &nbsp;&nbsp;&nbsp;&nbsp;None
                      </SoftTypography>
                    </SoftBox>
                    <SoftBox display="flex" alignItems="center">

                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={this.handleSetAssignee}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        &nbsp;&nbsp;<span style={{top:'62px',position:'absolute'}}><GroupIcon /></span> &nbsp;&nbsp;&nbsp;&nbsp;Assignee
                      </SoftTypography>
                    </SoftBox>

                  </div>
                </div>
              )}
              <div style={{ cursor: 'pointer', top: '1.8px', right: '100px', position: 'absolute', borderRadius: '5px', padding: '5px 5px 5px 5px', height: '30px', width: '70px', backgroundColor: isHovered4 ? '#d7d6d6' : 'transparent' }}>
                <p style={{ top: '5px', left: '7px', position: 'absolute', fontSize: '12px' }} onClick={this.toggleDropdown4} onMouseEnter={this.handleMouseEnter4} onMouseLeave={this.handleMouseLeave4}>Subtasks</p>
              </div>
              {isDropdownVisible4 && (
                <div>
                  <div style={{ width: '130px', height: '250px', top: '40px', right: '50px', border: '2px solid #d7d6d6', boxShadow: '5px 5px 10px #d7d6d6', zIndex: '997', position: 'absolute', backgroundColor: 'white', borderRadius: '10px' }}>
                    <p style={{ fontSize: '12px', color: '#969698', padding: '10px 10px' }}>SHOW SUBTASKS </p>
                    <SoftBox display="flex" alignItems="center">

                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={this.handleSetNone}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        &nbsp;&nbsp;<span style={{top:'42px',position:'absolute'}}><BlockIcon /></span> &nbsp;&nbsp;&nbsp;&nbsp;None
                      </SoftTypography>
                    </SoftBox>
                    <SoftBox display="flex" alignItems="center">

                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={this.handleSetAssignee}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        &nbsp;&nbsp;<span style={{top:'62px',position:'absolute'}}><GroupIcon /></span> &nbsp;&nbsp;&nbsp;&nbsp;Assignee
                      </SoftTypography>
                    </SoftBox>

                  </div>
                </div>
              )}
               <div style={{ cursor: 'pointer', top: '1.8px', right: '50px', position: 'absolute', borderRadius: '5px', padding: '5px 5px 5px 5px', height: '30px', width: '40px', backgroundColor: isHovered5 ? '#d7d6d6' : 'transparent' }}>
                <p style={{ top: '5px', right: '7px', position: 'absolute', fontSize: '12px' }} onClick={this.toggleDropdown5} onMouseEnter={this.handleMouseEnter5} onMouseLeave={this.handleMouseLeave5}>Show</p>
              </div>
              {isDropdownVisible5 && (
                <div>
                  <div style={{ width: '130px', height: '250px', top: '40px', right: '-30px', border: '2px solid #d7d6d6', boxShadow: '5px 5px 10px #d7d6d6', zIndex: '997', position: 'absolute', backgroundColor: 'white', borderRadius: '10px' }}>
                    <p style={{ fontSize: '12px', color: '#969698', padding: '10px 10px' }}>SHOW</p>
                    <SoftBox display="flex" alignItems="center">

                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={this.handleSetNone}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        &nbsp;&nbsp;<span style={{top:'42px',position:'absolute'}}><BlockIcon /></span> &nbsp;&nbsp;&nbsp;&nbsp;None
                      </SoftTypography>
                    </SoftBox>
                    <SoftBox display="flex" alignItems="center">

                      <SoftTypography
                        variant="button"
                        fontWeight="regular"
                        onClick={this.handleSetAssignee}
                        sx={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        &nbsp;&nbsp;<span style={{top:'62px',position:'absolute'}}><GroupIcon /></span> &nbsp;&nbsp;&nbsp;&nbsp;Assignee
                      </SoftTypography>
                    </SoftBox>

                  </div>
                </div>
              )}
            </div>
          </section>
        </nav>

        <section className="kanban__nav">
          <div className="kanban__nav-wrapper">
            <Title />
            <Team />
          </div>
        </section>
      </div>
    );
  }
}

export default Nav;
