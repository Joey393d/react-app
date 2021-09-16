import React from 'react'
import HornedBeast from './Horned-Beasts'

import { Button, CardColumns, Container, Form } from 'react-bootstrap';



export default class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      
      filteredBeasts: []
    };
  }

  handleSubmit = (event) => {
    
    event.preventDefault();

   
    let hornCount = parseInt(event.target.elements.hornCount.value);
    console.log(hornCount);

    this.filterBeasts(hornCount);
  }

  handleChange = event => {
    let hornCount = parseInt(event.target.value);
    console.log(hornCount);

    this.filterBeasts(hornCount);
  }

  filterBeasts = (hornCount) => {
    
    let filteredBeasts = this.props.beasts;

    if (hornCount > 0) {
      filteredBeasts = filteredBeasts.filter(beast => beast.horns === hornCount);
    }

    this.setState({
      
      filteredBeasts,
    });
  }

  render() {
    let beasts = this.state.filteredBeasts;
    console.log(beasts);

    return (
      <Container as="main" >
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>How many horns?</Form.Label>
            <Form.Control as="select" name="hornCount" onChange={this.handleChange}>
              <option value="0">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button type="submit">Filter</Button>
          </Form.Group>
        </Form>
        <CardColumns>
          {beasts.map((beast, i) => (
            <HornedBeast
              key={i}
              beastIndex={i}
              displayModalForIndex={this.props.handleSelectBeast}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          ))}
        </CardColumns>
      </Container>
    )
  }
}