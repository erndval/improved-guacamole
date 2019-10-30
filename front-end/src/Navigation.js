import React from 'react';
import { Link } from 'react-router-dom'

function Navigation(props){
  return(
    <div class="ui left vertical menu sidebar">
      <div role="listitem" class="item">Home</div>
      <Link to="/content" class="item"><div>Stories</div></Link>
      <Link to="/blog" role="listitem" class="item"><div>Blog</div></Link>
    </div>

  )
}

export default Navigation;
