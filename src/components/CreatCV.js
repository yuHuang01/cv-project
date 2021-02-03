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
    this.addPrat = this.addPrat.bind(this)
    this.changePracFillState = this.changePracFillState.bind(this);
  };

  //change fill satte
  changeSchoolFillState(boolean){
    this.setState({
      isFillingSchool: boolean,
    })
  }
  changePracFillState(boolean){
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
    
    const newSchool = {
      schoolName: schoolName,
      titleOfStudy: titleOfStudy,
      dateOfStudy: {
        start: startSchool,
        end: endSchool,
      }
    }
  };
  
    //Prac functions
  renderPractInputForm(form){
    ReactDOM.render(
      form ,
      document.getElementById('practical')
    )
  };
  addPrat(){
    
  };


  //render
  render() {
    let fillStateSchool = this.state.isFillingSchool;
    let fillStatePrac = this.state.isFillingPrac;
    let addSchoolBtnFunc;
    let addPracBtnFunc;

    if( !fillStateSchool ){
      addSchoolBtnFunc = () => {
        console.log('not filling');
        console.log(this.state.isFillingSchool);
        this.renderSchoolInputForm();
        this.changeSchoolFillState(true);
      }
    }

    if( !fillStatePrac ){
      addPracBtnFunc = () => {
        this.renderPractInputForm();
        this.changeSchoolFillState();
      }
    } else {

    }

    return (
      <div id="createCV">
        <h1>Create CV</h1>
        <form>

          { /*General user informations:*/}
          <label htmlFor="name">Enter your name:</label>
          <input type="text" className="name formInput" name="first" id="first" placeholder="Your first name..."/>
          <input type="text" className="name formInput" name="last" id="last" placeholder="Your last name..." />
          <label htmlFor="contact">Contacts:</label>
          <input type="text" className="contacts formInput" name="phoneNum" id="phoneNum" placeholder="Phone number..." />
          <input type="email" className="contacts formInput" name="email" id="email" placeholder="E-mail..."></input>

          {/*Studies: */}
          <label htmlFor="studies" id="eduLabel">Educational experiences: </label>
          <div id="school" className="added">

            {/*Place to insert educational experiences*/}
            <ListSchool schools = { this.props.schools } />

          </div>
          <button type="button" className="add" onClick= { addSchoolBtnFunc }><i className="fas fa-plus"></i>Add</button>

          {/*Practical experiences: */}
          <label htmlFor="practical" id="practicalLabel">Practical experiences:</label>
          <div id="practical" className="added">

            {/*Place to insert practical experiences*/}
            <ListPract pracExps = { this.props.pracExp }/>

          </div>
          <button type="button" className="add" onClick= { addPracBtnFunc }><i className="fas fa-plus"></i>Add</button>

          <button type="submit" id="submit">Submit!</button>
        </form>
      </div>
    )
  }
};

export default CreateCV;
