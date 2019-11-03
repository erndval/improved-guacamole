import React from 'react';
import { Link } from 'react-router-dom'

function Navigation(props){
  return(
    <div class="sidenav">
      <Link to="/" class="item">Home</Link>
      <Link to="/content" class="item">Stories</Link>
      <Link to="/blog" class="item">Blog</Link>
      <Link to="/projects" class="item">Projects</Link>
    </div>
  )
}

export default Navigation;
