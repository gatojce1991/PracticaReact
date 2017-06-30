import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';

// const PriComponente = () => (
// <div className="text-center">
//     hola mundo
// </div>
// );

// ReactDOM.render(<PriComponente />, document.getElementById('root'));