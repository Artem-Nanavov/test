import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
    <Provider store={ store } >
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
