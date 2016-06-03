import Hello from './hello.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx'



var horizon = Horizon()
horizon.onReady(function() {
  ReactDOM.render((
      <div>
        <Header/>
        <Hello/>

      </div>
    )
    , document.getElementById('main')
  );
});
horizon.connect()
