import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BindMe from './BindMe';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BindMe />, document.getElementById('bindme'));
registerServiceWorker();

// turn on HMR
if (module.hot){
    module.hot.accept();
}
