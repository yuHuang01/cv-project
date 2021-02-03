import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CreateCV from './components/CreatCV';
import DisplayCV from './components/DisplayCV';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isCreating: true,
      
      name: '',
      email: '',
      phonenumber: '',

      eduExp: [],
      practicalExp: [],
    }

    //binding this:
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  };

  //Navbar functions
  handleCreate(){
    this.setState({
      isCreating: true,
    });
  };

  handleDisplay() {
    this.setState({
      isCreating: false,
    });
  };

  render(){
    let isCreating = this.state.isCreating
    let currentDisp;
    let currentNav;
    if(isCreating){
      currentNav = <Navbar create = { this.handleCreate } display = { this.handleDisplay } createBg = 'green' displayBg = 'white' />
      currentDisp = <CreateCV />;
    }else{
      currentNav = <Navbar create = { this.handleCreate } display = { this.handleDisplay } createBg = 'white' displayBg = 'green' />
      currentDisp = <DisplayCV />;
    }
    return (
      <div id="main">
        <i className="fas fa-user-tie"></i>
        { currentNav }
        { currentDisp }
      </div>
    );
  }
}

export default App;
