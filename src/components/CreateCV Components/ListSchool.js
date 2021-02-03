import React from 'react';

class NewSchool extends React.Component {
  render() {
    return (
      <div id="schoolDiv">
        { this.props.schools.map((school) => {
          return (
            <div className="list-items" key={ school.id }>
              <h3>{ school.schoolName }</h3>
              <p>Your title of study was: { school.titleOfStudy }</p>
              <p>And your study date was from { school.dateOfStudy.start } to { school.dateOfStudy.end }</p>
              <button className="change-btns"><i className="far fa-edit"></i></button> 
              <button className="change-btns"><i className="far fa-trash-alt"></i></button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default NewSchool;