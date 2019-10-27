import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'
import Title from './Title'
import Content from './Content'
import Blog from './Blog'

function App() {
  return (
    <div className="App">
      <Route path="/" component={Title} />
      <Route path="/" component={Navigation} />
      <Route exact path="/content" component={Content} />
      <Route exact path="/blog" component={Blog} />
    </div>
  );
}

export default App;
