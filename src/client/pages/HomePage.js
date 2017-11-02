import React from 'react';

const HomePage = () => {
  return (<div>
    <p>I'm the very BEST home component</p>
    <button onClick={() => console.log('clicked!') }>Buttonie button</button>
  </div>);
};

export default {
  component: HomePage
};