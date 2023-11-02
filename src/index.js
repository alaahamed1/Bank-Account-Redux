import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from  './store';


// via this provider the react project and redux are now talk to each other 
import { Provider } from 'react-redux';

// store.dispatch({type: 'account/deposite', payload: 250});
// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
