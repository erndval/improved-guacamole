import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'
import Title from './Title'

function App() {
  return (
    <div className="App">
      <Route path="/" component={Title} />
      <Route path="/" component={Navigation} />
    </div>
  );
}

export default App;
