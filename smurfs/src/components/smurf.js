import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

function Smurf(props) {
  console.log('smurf props', props)

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response)
        // editSmurfs(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h2>Smurf component</h2>
      {props.smurfs.length > 0 ? props.smurfs.map(smurf => {
        console.log('smurf map', smurf)
        return (
          <div key={smurf.id}>
            <p>{smurf.name}</p>
          </div>
        )
      }) : <h2>Loading...</h2> }
    </div>
  )
}

const mapStateToProps = state => {
  console.log('smurf.js mSTP', state)
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {})(Smurf)