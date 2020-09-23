import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer  from './reducers';
import middleware from './middleware'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



const store = createStore(reducer , middleware);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
