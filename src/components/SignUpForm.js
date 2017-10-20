import React, { Component } from 'react';

export default ({ loading, signUpUser }) => (
  <div>
    {
      loading ? <p>Loading</p> : <p>Not Loading</p>
    }
    <button onClick={() => signUpUser('test', 'test')}>
      Dispatch
    </button>
  </div>
)
