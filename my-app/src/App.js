import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/selectedBeast';
import beastData from './data/data.json';

// Converted from function component to a class component
// by calling the function 'render' and putting it in a class that extends Component
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      selectedBeast: null,
    };
  }

  handleSelectBeast = beastIndex => {
    this.setState({
      selectedBeast: beastData[beastIndex],
      showModal: true,
    });
  }

  handleClose = () => {
    console.log('Hiding modal');
    this.setState({ showModal: false });
  }

  render() {
    let theme = 'dark';

    return (
      <div className="App">
        <Header theme={theme} />
        <Main beasts={beastData}
          handleSelectBeast={this.handleSelectBeast}
        />
        <Footer theme={theme} />
        <SelectedBeast
          beast={this.state.selectedBeast}
          show={this.state.showModal}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default App;