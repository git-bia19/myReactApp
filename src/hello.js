import React from 'react';
import './hello.css';
import './App.css';

function hello ({firstName}) {
  return (
    <p className="myname"> {firstName}</p>
  )
}



export default hello;
