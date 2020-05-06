import React from 'react';
import axios from 'axios';

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: 0,
      height: 'cm'
    }

  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('form submitted')
    this.addSmurf()
  }

  addSmurf = () => {
    axios.post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
      .then(response => {
        console.log('post req response', response)
      })
  }

  render() {
    console.log('state', this.state)
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='name'
          // placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          type='text'
          name='age'
          placeholder='age'
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input 
          type='text'
          name='height'
          placeholder='height'
          value={this.state.height}
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
    )
  }
}

export default SmurfForm