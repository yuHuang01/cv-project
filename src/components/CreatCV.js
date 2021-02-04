import React from 'react';
import './compoStyles/CreateCV.css';
import ReactDOM from 'react-dom';
import uniqid from 'uniqid';

import AddSchool from './CreateCV Components/AddSchool';
import ListSchool from './CreateCV Components/ListSchool';

import AddPracExp from './CreateCV Components/AddPracExp';
import ListPract from './CreateCV Components/ListPract';

class CreateCV extends React.Component {
  constructor(){
    super();
    this.state = {
      isFillingSchool: false,
      isFillingPrac: false,
    }

    //bind this:
    this.renderSchoolInputForm = this.renderSchoolInputForm.bind(this);
    this.changeSchoolFillState = this.changeSchoolFillState.bind(this);
    this.addSchool = this.addSchool.bind(this);

    this.renderPractInputForm = this.renderPractInputForm.bind(this);
    this.addPract = this.addPract.bind(this)
    this.changePractFillState = this.changePractFillState.bind(this);
  };

  //change fill satte
  changeSchoolFillState(boolean){
    this.setState({
      isFillingSchool: boolean,
    })
  }
  changePractFillState(boolean){
    this.setState({
      isFillingPrac: boolean,
    })
  }

  //Button functions:

    //School functions:
  renderSchoolInputForm(form){
    ReactDOM.render(
      form ,
      document.getElementById('school')
    )
  };
  addSchool(){
    const schoolName = document.getElementById('schoolName').value;
    const titleOfStudy = document.getElementById('titleOfStudy').value;
    const startSchool = document.getElementById('startSchool').value;
    const endSchool = document.getElementById('endSchool').value;
    const schoolId = uniqid();
    
    const newSchool = [{
      schoolName: schoolName,
      titleOfStudy: titleOfStudy,
      dateOfStudy: {
        start: startSchool,
        end: endSchool,
      },
      id: schoolId,
    }]

    this.props.addNewSchool( newSchool );
  };
  
    //Prac functions
  renderPractInputForm(form){
    ReactDOM.render(
      form ,
      document.getElementById('practical')
    )
  };
  addPract(){
    const companyName = document.getElementById('companyName').value;
    const position = document.getElementById('position').value;
    const mainTasks = document.getElementById('mainTasks').value;
    const startDate = document.getElementById('startPract').value;
    const endDate = document.getElementById('endPract').value;
    const practId = uniqid();

    const newPract = {
      companyName: companyName,
      position: position,
      mainTasks: mainTasks,
      dateOfWork: {
        start: startDate,
        end: endDate,
      },
      id: practId,
    };

    this.props.addNewPract(newPract);
  };


  //render
  render() {
    let fillStateSchool = this.state.isFillingSchool;
    let fillStatePrac = this.state.isFillingPrac;
    let addSchoolBtnFunc;
    let addPracBtnFunc;

    if( !fillStateSchool ){
      addSchoolBtnFunc = () => {
        this.renderSchoolInputForm(<AddSchool renderSchoolInputForm = {this.renderSchoolInputForm } addSchool = { this.addSchool } changeSchoolFillState = { this.changeSchoolFillState }/>);
        this.changeSchoolFillState(true);
      }
    }

    if( !fillStatePrac ){
      addPracBtnFunc = () => {
        this.renderPractInputForm(<AddPracExp renderPractInputForm = { this.renderPractInputForm } addPract = { this.addPract } changePractFillState = { this.changePractFillState }/>);
        this.changePractFillState(true);
      }
    } else {

    }

    return (
      <div id="createCV">
        <h1>Create CV</h1>
        <form>

          { /*General user informations:*/}
          <label htmlFor="name">Enter your name:</label>
          <input type="text" className="name formInput" name="first" id="first" placeholder="Your first name..." onInput = { () => { this.props.saveFirst() } }/>
          <input type="text" className="name formInput" name="last" id="last" placeholder="Your last name..."  onInput = { () => { this.props.saveLast() }}/>
          <label htmlFor="contact">Contacts:</label>
          <input type="text" className="contacts formInput" name="phoneNum" id="phoneNum" placeholder="Phone number..." onInput = { () => { this.props.savePhone() }} />
          <input type="email" className="contacts formInput" name="email" id="email" placeholder="E-mail..." onInput = { () => { this.props.saveEmail() } }></input>
          <label htmlFor="address">Your address:</label>
          <input type="text" className="formInput" name="address" id="address" placeholder="And your address..." onInput = { () => { this.props.saveAdd() }}/>

          {/*Studies: */}
          <label htmlFor="studies" id="eduLabel">Educational experiences: </label>
          <ListSchool schools = { this.props.schools } deleteSchool = { this.props.deleteSchool }/>
          <div id="school" className="added">

            {/*Place to insert educational experiences form*/}
            
          </div>
          <button type="button" className="add" onClick= { addSchoolBtnFunc }><i className="fas fa-plus"></i>Add</button>

          {/*Practical experiences: */}
          <label htmlFor="practical" id="practicalLabel">Practical experiences:</label>
          <ListPract pracExps = { this.props.pracExp } deletePract = { this.props.deletePract } />

          <div id="practical" className="added">

            {/*Place to insert practical experience form*/}
            
          </div>
          <button type="button" className="add" onClick= { addPracBtnFunc }><i className="fas fa-plus"></i>Add</button>
        </form>
      </div>
    )
  }
};

export default CreateCV;
