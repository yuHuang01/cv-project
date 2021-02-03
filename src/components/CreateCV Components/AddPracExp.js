import React from 'react';

class AddPracExp extends React.Component {
  render() {
    return (
      <form className='add-new-exp-form'>
        <label htmlFor="companyName">Company name: </label>
        <input type="text" name="companyName" id="companyName"/>

        <label htmlFor="position">Your position was: </label>
        <input type="text" name="position" id="position"/>

        <label htmlFor="mainTask">Main tasks:</label>
        <input type="text" name="mainTasks" id="mainTasks"/>

        <label htmlFor="date">Date of working there: (start and end)</label>
        <input type="date" name="start" id="startPract"/>
        <input type="date" name="end" id="endPract"/>

        <button type="button" id="addSchoolBtn" className="addNewExpBtn" onClick= { () => { 
          this.props.addPract()
          this.props.changePractFillState( false );
          this.props.renderPractInputForm( null );
          } }>Add Practical experience!</button>
      </form>
    )
  }
};

export default AddPracExp;