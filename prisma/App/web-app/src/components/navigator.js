import React,{Component} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 
import {Nav, Navbar, NavItem, MenuItem,Dropdown} from 'react-bootstrap';

class Navigator extends Component{

constructor() {
  super();
  this.state= {
    activekey:-1
  }
}


handleSelect(eventKey) {
    this.setState({
        activekey: eventKey
      });
    }

render() {
  return(
<Navbar inverse collapseOnSelect>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Nav activekey={this.state.activekey}  onSelect={this.handleSelect.bind(this)}>
      <LinkContainer to='/demo/'>
      <NavItem eventKey={1}> Upload Image / Video</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
    
    <Dropdown id="dropdown-custom-1">
    <Dropdown.Toggle useAnchor={true} noCaret inverse>
       <div className="square-button inbox big-icon"> <i className="fa fa-inbox fa-3x"></i></div>
     </Dropdown.Toggle>
      <Dropdown.Menu>   
        <MenuItem eventKey={4.1}>Update Profile</MenuItem>
        <MenuItem eventKey={4.2}>Setting</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={4.3}>Logout</MenuItem>
      </Dropdown.Menu>  
       </Dropdown>
    <span> &nbsp;&nbsp;&nbsp;</span>
    <Dropdown id="dropdown-custom-2">
    <Dropdown.Toggle useAnchor={true} noCaret inverse>
       <div className="square-button inbox big-icon"> <i className="fa fa-user fa-3x"></i></div>
     </Dropdown.Toggle>
      <Dropdown.Menu>   
        <MenuItem eventKey={5.1}>Update Profile</MenuItem>
        <MenuItem eventKey={5.2}>Setting</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={5.3}>Logout</MenuItem>
      </Dropdown.Menu>  
      </Dropdown>
    </Nav>
  </Navbar.Collapse>
  </Navbar>


);
}
}

export default Navigator;