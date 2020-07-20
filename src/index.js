import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';

console.log(store.STORE);

ReactDOM.render(<App lists = {store.lists} allCards={store.allCards} />, document.getElementById('root'));