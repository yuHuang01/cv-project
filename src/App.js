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
      
      first: '',
      last: '',
      email: '',
      phoneNumber: '',
      address: '',

      eduExp: [
        {schoolName: 'Boronkay', titleOfStudy: 'engineering', dateOfStudy: {start: 2016, end: 2020}, id: '123'}
      ],
      practicalExp: [
        {companyName: 'Decathlon', position: 'sporttanácsadó', mainTasks: 'kassza, direkt eladás', dateOfWork: {start: 2018, end: 2021}, id: '456'}
      ],
    }

    //binding this:
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.addNewSchool = this.addNewSchool.bind(this);
    this.addNewPract = this.addNewPract.bind(this);
    this.deleteSchool = this.deleteSchool.bind(this);
    this.deletePract = this.deletePract.bind(this);

    this.saveFirst = this.saveFirst.bind(this);
    this.saveLast = this.saveLast.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
    this.savePhone = this.savePhone.bind(this);
    this.saveAdd = this.saveAdd.bind(this);
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
  };
  deleteSchool(id){
    const newSchools = this.state.eduExp.filter((edu) => edu !== id)
    this.setState({
      eduExp: newSchools,
    });
  };

  addNewPract(practObj){
    this.setState({
      practicalExp: this.state.practicalExp.concat(practObj),
    })
  };
  deletePract(id){
    const newPracts = this.state.practicalExp.filter((pract) => pract.id !== id);
    this.setState({
      practicalExp: newPracts,
    })
  };

  //Save general user informations:
  saveFirst(){
    const fName = document.getElementById('first').value;

    this.setState({
      first: fName,
    })
  };
  saveLast(){
    const lName = document.getElementById('last').value;

    this.setState({
      last: lName,
    })
  };
  saveEmail(){
    const mail = document.getElementById('email').value;
    this.setState({
      email: mail,
    })
  };
  savePhone(){
    const pNum = document.getElementById('phoneNum').value;

    this.setState({
      phoneNumber: pNum,
    })
  };
  saveAdd(){
    const add = document.getElementById('address').value;

    this.setState({
      address: add,
    })
  }


  render(){
    let isCreating = this.state.isCreating
    let currentDisp;
    let currentNav;
    if(isCreating){
      currentNav = <Navbar create = { this.handleCreate } display = { this.handleDisplay }
                   createBg = 'green' displayBg = 'white' createText = 'white' displayText ='black'/>

      currentDisp = <CreateCV schools = { this.state.eduExp } pracExp = { this.state.practicalExp }
                    addNewSchool = { this.addNewSchool } addNewPract = { this.addNewPract }
                    saveFirst = { this.saveFirst } saveLast = { this.saveLast } saveEmail = { this.saveEmail }
                    savePhone = { this.savePhone } saveAdd = {this.saveAdd } />;

    }else{
      currentNav = <Navbar create = { this.handleCreate } display = { this.handleDisplay }
                   createBg = 'white' displayBg = 'green' createText = 'black' displayText = 'white'/>;

      currentDisp = <DisplayCV schools = { this.state.eduExp } pracExp = { this.state.practicalExp }
                    first = { this.state.first } last = { this.state.last } phoneNum = { this.state.phoneNum }
                    email = { this.state.email } address = { this.state.address }/>;
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
