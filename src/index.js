// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';

const priComponente = function(){
    return React.createElement('div',null, 'hello world');
}

ReactDOM.render(React.createElement(priComponente,null,null),document.getElementById('root'));