import React from 'react'
import HornedBeast from './components/Horned-Beasts'
import data from './data/data.json'


class Main extends React.Component {
  render() {
  return (
    <div>
    {data.map(beast => (<HornedBeast title={beast.title} image= {beast.image_url} 
      description={beast.description}/>))}
    </div>
  );
  };
};
   
export default Main;