import React from 'react';
import { Link } from 'react-router-dom'

function Navigation(props){
  return(
    <div role="list" class="ui list">
      <div role="listitem" class="item">Home</div>
      <Link to="/content" role="listitem" class="item"><div>Stories</div></Link>
      <Link to="/blog" role="listitem" class="item"><div>Blog</div></Link>
    </div>

  )
}

export default Navigation;
