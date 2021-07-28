
import './App.css';
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import RootComponent from './RootComponent';

class App extends React.Component {
  state = {
    isLoading: true
  }


  render() {
    const {Categories, isLoading} = this.state;

    return (
      <div id="Container">
        
            <RootComponent></RootComponent>
        
      </div>
    )
  }

}

export default App;