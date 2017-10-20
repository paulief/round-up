import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './helpers/configureStore';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
