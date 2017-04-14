import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div>React application running!</div>;
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
