import React from 'react';

class ListDisplayPract extends React.Component {
  render() {
    return (
      <div id="listDisplayPract">
        <h2>Practical experiences: </h2>
        { this.props.pracExps.map((pract) => {
          return (
            <div className="practs exp-list" key= { pract.id }>
              <i class="fas fa-briefcase"></i> <h2 className="expTitles">{ pract.companyName }</h2>
              <p>My position was: { pract.position }</p>
              <p>My main tasks are: { pract.mainTasks }</p>
              <p>Started my journey there in { pract.dateOfWork.start } and I left in { pract.dateOfWork.end }</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListDisplayPract;
