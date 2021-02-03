import React from 'react';

class AddSchool extends React.Component {
  render() {
    return (
      <form className= "add-new-exp-form">
        <label htmlFor="schoolName">School name:</label>
        <input type="text" name="schoolName" className='formInput' id="schoolName"/>

        <label htmlFor="titleOfStudy">Title of study:</label>
        <input type="text" name="titleOfStudy" className='formInput' id="titleOfStudy"/>

        <label htmlFor="date">Date of study: (start and end)</label>
        <input type="date" name="start" className='formInput' id="startSchool"/>
        <input type="date" name="end" className='formInput' id="endSchool"/>
        <button type="button" id="addSchoolBtn" className="addNewExpBtn" onClick= { () => { 
          this.props.addSchool()
          this.props.changeSchoolFillState( false );
          this.props.renderSchoolInputForm( null );
          } }>Add School!</button>
      </form>
    )
  }
};

export default AddSchool;
