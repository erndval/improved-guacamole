import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'
import Title from './Title'
import Content from './Content'

function App() {
  return (
    <div className="App">
      <Route path="/" component={Title} />
      <Route path="/" component={Navigation} />
      <Route exact path="/content" component={Content} />
    </div>
  );
}

export default App;
