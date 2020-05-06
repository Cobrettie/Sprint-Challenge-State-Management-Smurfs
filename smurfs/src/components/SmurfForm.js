import React from 'react';

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('form submittied')
  }

  render() {
    console.log('state.value', this.state.value)
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='name'
          // placeholder='name'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input 
          type='text'
          name='age'
          placeholder='age'
        />
        <input 
          type='text'
          name='height'
          placeholder='height'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
    )
  }
}

export default SmurfForm