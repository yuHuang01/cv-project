import React from 'react';

class AddSchool extends React.Component {
  render() {
    return (
      <form className= "school-form">
        <label htmlFor="schoolName">School name:</label>
        <input type="text" name="schoolName" className='formInput' id="schoolName"/>

        <label htmlFor="titleOfStudy">Title of study:</label>
        <input type="text" name="titleOfStudy" className='formInput' id="titleOfStudy"/>

        <label htmlFor="date">Date of study: (start and end)</label>
        <input type="date" name="start" className='formInput' id="startSchool"/>
        <input type="date" name="end" className='formInput' id="endSchool"/>
        <div id="addSchoolBtn" onClick= { () => { this.props.changeFillSchoolState( false ) } }>Add School!</div>
      </form>
    )
  }
};

export default AddSchool;
