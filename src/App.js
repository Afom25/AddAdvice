import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  state = {advice : ''};

  componentDidMount(){
    this.fetchAdvice();
   
  }

  fetchAdvice = () => {
    axios.get('	https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice} = response.data.slip;
      
      this.setState({ advice });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    const {advice } = this.state;
  return (
    <div className="App">
     

    <div className="card text-center">
    <div className="card-header">
      USE THIS ADVICE
    </div>
    <div className="card-body">
      <h5 className="card-title">{advice}</h5>
      {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
      <button className='btn btn-primary' onClick={this.fetchAdvice}>
           <span>GIVE ME ADVICE</span>
      </button>
    </div>
    <div className="card-footer text-muted">
     
    </div>
  </div>
  </div>
  );
}

}
export default App;
