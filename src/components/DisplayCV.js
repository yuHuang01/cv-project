import React from 'react';
import './compoStyles/DisplayCV.css';
import ListDisplayPract from './DsiplayCV_Components/ListDisplayPract';
import ListDisplaySchool from './DsiplayCV_Components/ListDisplaySchool';

class DisplayCV extends React.Component {
  render() {
    return (
      <div id="displayCV">
        <h1>Your CV</h1>
        <div id="cv">
          <div id="name" className="general">
            <h1 className="nameInf">{ this.props.first }</h1>
            <h1 className="nameInf">{ this.props.last }</h1>
          </div>
          <div id="contact" className="general">
            <p className="contactInf"><i className="fas fa-at"></i>Email: <strong>{ this.props.email }</strong></p>
            <p className="contactInf"><i className="fas fa-phone"></i>Phone number: <strong>{ this.props.phoneNum }</strong></p>
            <p className="contactInf"><i className="fas fa-building"></i>Address: <strong>{ this.props.address }</strong></p>
          </div>
          <ListDisplaySchool schools = { this.props.schools }/>
          <ListDisplayPract pracExps = { this.props.pracExp }/>
        </div>
      </div>
    )
  }
};

export default DisplayCV;
