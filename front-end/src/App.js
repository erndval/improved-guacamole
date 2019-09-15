import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navigation} />
    </div>
  );
}

export default App;
