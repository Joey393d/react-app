import React from 'react';

class HornedBeast extends React.Component {

  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img title={this.props.title} src={this.props.image} alt={this.props.alt}/>
        <p>{this.props.description}</p>
      </div>
    )

  }
}

export default HornedBeast;