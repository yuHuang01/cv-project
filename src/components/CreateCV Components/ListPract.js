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
              <p>Main tasks:</p>
                <ul>
                  { pract.mainTasks.map((task) => {
                    return (
                      <li key= { task.id }>{task.task}</li>
                    )
                  }
                  )}
                </ul>
              <p>The starting date was: { pract.dateOfWork.start } and the end date was: { pract.dateOfWork.end }</p>
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
