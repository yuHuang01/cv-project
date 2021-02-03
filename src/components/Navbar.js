import React from 'react';
import './compoStyles/Navbar.css';

class Navbar extends React.Component {
  render(){
    return (
      <div id="navbar">
        
        <div id="create" className="nav" onClick = { this.props.create } style = {{ backgroundColor: this.props.createBg, color: this.props.createText}}>Create</div>

        <div id="display" className="nav" onClick = { this.props.display } style = {{ backgroundColor: this.props.displayBg, color: this.props.displayText}}>Display</div>
      </div>
    );
  }
};

export default Navbar;