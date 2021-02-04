import React from 'react';

class ListDisplaySchool extends React.Component {
  render() {
    return (
      <div id="listDisplaySchool" className="list-container">
        <h2>Educational experiences: </h2>
        { this.props.schools.map((school) => {
          return (
            <div className="school exp-list" key= { school.id }>
              <i className="fas fa-university"></i><h2 className="expTitles">{ school.schoolName}</h2>
              <p>{ school.titleOfStudy }</p>
              <p>Started my education in { school.dateOfStudy.start } and ended it in { school.dateOfStudy.end }</p>
              <p></p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListDisplaySchool;
