import React from 'react';

class ListPract extends React.Component {
  render() {
    return (
      <div id="pract-list">
        { this.props.pracExps.map((pract) => {
          return (
            <div className="list-items" key = { pract.id }>
              <h3>{ pract.companyName }</h3>
              <h4>{ pract.position }</h4>
              <p>Main tasks: <strong>{ pract.mainTasks }</strong></p>
              <p>The starting date was: <strong>{ pract.dateOfWork.start }</strong> and the end date was: <strong>{ pract.dateOfWork.end }</strong></p>
              <button className="change-btns"><i className="far fa-edit"></i></button> 
              <button className="change-btns"><i className="far fa-trash-alt"></i></button>
            </div>
          )
        })}
      </div>
      
    )
  }
}

export default ListPract;
