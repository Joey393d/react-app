import React from 'react'
import HornedBeast from './components/Horned-Beasts'
import data from './data/data.json'
import Form from 'react-bootstrap'




class Main extends React.Component {
  render() {
  return (

<Container as="main">
    <Form>
      <Form.Group>
        <Form.Control as="select"> 
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>

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