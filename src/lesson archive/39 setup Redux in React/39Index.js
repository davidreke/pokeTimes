import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 1 npm install redux react-redux (installs react and react redux)
// 2. import create store
import { createStore} from  'redux'
// 4. import Provider
import { Provider } from 'react-redux'
// 10 import rootReducer
import rootReducer from './reducers/rootReducer'

// 3. Create the store
// 11. include rootReducer as an argument to createStore
const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    {/* 5 wrapp App.js in a Provider with store={store} */}
    {/* 6. create reducers folder in src folder and place rootReducer.js in it */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
