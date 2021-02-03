import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CreateCV from './components/CreatCV';
import DisplayCV from './components/DisplayCV';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isCreating: true,
      
      name: '',
      email: '',
      phonenumber: '',

      eduExp: [
        {schoolName: 'Boronkay', titleOfStudy: 'engineering', dateOfStudy: {start: 2016, end: 2020}, id: '123'}
      ],
      practicalExp: [
        {companyName: 'Decathlon', position: 'sporttanácsadó', mainTasks: [{task:'kassza', id: '0'}, {task:'direkt eladás', id: '1'}], dateOfWork: {start: 2018, end: 2021}, id: '456'}
      ],
    }

    //binding this:
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.addNewSchool = this.addNewSchool.bind(this);
    this.addNewPract = this.addNewPract.bind(this);
  };

  //Navbar functions
  handleCreate(){
    this.setState({
      isCreating: true,
    });
  };

  handleDisplay() {
    this.setState({
      isCreating: false,
    });
  };

  //Set state:
  addNewSchool(schoolObj){
    this.setState({
      eduExp: this.state.eduExp.concat(schoolObj),
    })
  }

  addNewPract(practObj){
    this.setState({
      practicalExp: this.state.practicalExp.concat(practObj),
    })
  }
  render(){
    let isCreating = this.state.isCreating
    let currentDisp;
    let currentNav;
    if(isCreating){
      currentNav = <Navbar create = { this.handleCreate } display = { this.handleDisplay } createBg = 'green' displayBg = 'white' createText = 'white' displayText ='black'/>
      currentDisp = <CreateCV schools = { this.state.eduExp } pracExp = { this.state.practicalExp } addNewSchool = { this.addNewSchool } addNewPract = { this.addNewPract }/>;
    }else{
      currentNav = <Navbar create = { this.handleCreate } display = { this.handleDisplay } createBg = 'white' displayBg = 'green' createText = 'black' displayText = 'white'/>
      currentDisp = <DisplayCV schools = { this.state.eduExp } pracExp = { this.state.practicalExp }/>;
    }
    return (
      <div id="main">
        <i className="fas fa-user-tie"></i>
        { currentNav }
        { currentDisp }
      </div>
    );
  }
}

export default App;
