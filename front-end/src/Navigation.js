import React from 'react';
import { Link } from 'react-router-dom'

function Navigation(props){
  return(
    <div role="list" class="ui list">
      <div role="listitem" class="item">Home</div>
      <div role="listitem" class="item">Stories</div>
    </div>

  )
}

export default Navigation;
