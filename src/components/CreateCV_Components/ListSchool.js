import React from 'react';
import EditSchool from './EditSchool';

class NewSchool extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditingSchool: false,
    }

    //bind this:
    this.changeEditingStatus = this.changeEditingStatus.bind(this);
  }
  changeEditingStatus(){
    this.setState({
      isEditingSchool: !this.state.isEditingSchool,
    });
  };


  render() {
    return (
      <div id="schoolDiv">
        { this.props.schools.map((school) => {
          return (
            <div className="list-items" key={ school.id }>
              <h3>{ school.schoolName }</h3>
              <p>Your title of study was: <strong>{ school.titleOfStudy } </strong></p>
              <p>And your study date was from <strong>{ school.dateOfStudy.start }</strong> to <strong>{ school.dateOfStudy.end } </strong></p>

              <div className="editSchoolPlace">
                { (this.state.isEditingSchool)? <EditSchool schooldId = { school.id } schools = { this.props.schools } changeEditingStatus = { this.changeEditingStatus }/> : null }
              </div>

              <button type="button" className="change-btns" onClick = { () => { this.changeEditingStatus() }}><i className="far fa-edit"></i></button> 
              <button type="button" className="change-btns" onClick = { () => {this.props.deleteSchool( school.id )}}><i className="far fa-trash-alt"></i></button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default NewSchool;