

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Data from './data/data.json'
import React from 'react';
import SelectedBeast from './src/selectedBeast.js'


class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      showModal: true,
    };
  }


render() {
  let theme='dark';
  
  return (
    <div classname="App">
      <Header theme={theme} />
    
      <Main beasts={Data} />

    
      <Footer theme={theme} />
  
      <SelectedBeast
      show={this.state.showModal} />
    </div>
     
    );

  }
}
export default App;
