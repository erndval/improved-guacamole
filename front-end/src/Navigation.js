import React from 'react';
import { Link } from 'react-router-dom'

function Navigation(props){
  return(
    <div class="ui sidebar inverted vertical menu">
      <a class="item">Home</a>
      <a class="item">Stories</a>
      <Link to="/blog" class="item">Blog</Link>
    </div>

  )
}

export default Navigation;
