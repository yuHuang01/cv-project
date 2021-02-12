import React from 'react';

class EditSchool extends React.Component {
  render() {

    return (
      <div className="EditSchool">
        <form>
        <select name="infoType" id="infoType"className="editSchoolInput">
          <option value="titleOfSchool">Title of the school</option>
          <option value="titleOfStudy">Tiltle of study</option>
          <option value="start">Starting date</option>
          <option value="end">End date</option>
        </select>
        <input type="text" name="editedInfo" id="editedInfo" className="editSchoolInput"/>
        <button type="button" onClick = { () => {this.props.changeEditingStatus()}} className="editSchoolBtn">Edit school infos!</button>
        </form>

      </div>
    )
  }
}

export default EditSchool;
