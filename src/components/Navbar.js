import React from 'react';
import './compoStyles/Navbar.css';

class Navbar extends React.Component {
  render(){
    return (
      <div id="navbar">
        
        <div id="create" className="nav" onClick = { this.props.create } style = {{ backgroundColor: this.props.createBg }}>Create</div>

        <div id="display" className="nav" onClick = { this.props.display } style = {{ backgroundColor: this.props.displayBg }}>Display</div>
      </div>
    );
  }
};

export default Navbar;