import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getData } from '../actions/getData';

class Smurf extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getData()
  }

  removeSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
  }

  render() {
  console.log('smurf props', this.props)
    return (
      <div>
        <h2>Smurf component</h2>
        {this.props.smurfs.length > 0 ? this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}cm</p>
              {/* <button onClick={this.removeSmurf(smurf.id)}>Remove Smurf</button> */}
            </div>
          )
        }) : <h2>Loading...</h2> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('smurf.js mSTP', state)
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getData })(Smurf)