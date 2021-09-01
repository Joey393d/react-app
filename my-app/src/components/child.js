import { render } from '@testing-library/react';
import React from 'react';
import Button from 'react-bootstrap/Button';


class Child extends React.Component {
  constructor(props){
  super(props);

    this.state = {
      votes: 0,
    };
    
  };



  addVote = () => {
    this.setState({
     votes: this.state.votes + 1,
     lastUpdated: new Date(),
    });


    console.log(this.state);
  }
  render(){
    return (
      <>
      <p><button onClick={this.addVote}>+1</button></p>
      <p>{this.state.votes}</p>
      </>
    );
  }

}

export default Child;
 


