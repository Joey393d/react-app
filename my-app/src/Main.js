import React from 'react'
import HornedBeast from './components/Horned-Beasts'
import data from './data/data.json'
import Form from 'react-bootstrap'
import Container from 'react-bootstrap'



class Main extends React.Component {

constructor(props){

}


handleSubmit = (event) => {
  event.preventDefault();

  let hornCount = parseInt(event.target.elements.hornCount.value);
  console.log(hornCount);
  if (hornCount > 0){
    this.setState({
      filteredBeasts: this.props.beasts.filter(beast => {
        if (beast.horns === hornCount) {
          return true;
        }
        return false;
      })
    })
    }
  }
}

  render() {
let beasts = this.state.filteredBeasts;
console.log(beasts);

  return (

<Container as="main">
    <Form onSubmit={this.handleSubmit}>
      <Form.Group>
        <Form.Control as="select"> 
          <option value="0">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          

        </Form.Control>

      </Form.Group>
    </Form>



    <div>
    {data.map(beast => (<HornedBeast title={beast.title} image= {beast.image_url} 
      description={beast.description}/>))}
    </div>
    </Container>
  );
  };
};
   
export default Main;