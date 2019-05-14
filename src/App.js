import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { simpleAction } from './actions/simpleAction'

import './css/App.css';


class App extends React.Component {
  render() {
    console.log('App Props', this.props);
    
    const { simpleAction } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <pre>
            { 
              JSON.stringify(this.props)
            }
          </pre>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={simpleAction}>
            Test Redux Action
          </button>
        </header>
      </div>
    );
    
  }
}

const mapStateToProps = state => {
  console.log('MSTP', state);
  return state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { simpleAction }, dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
