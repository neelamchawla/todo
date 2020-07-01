import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './component/Todo4/redux/store';

// import { createStore } from 'redux';
// import rootReducer from './component/Todo5/reducers';
// import Todo5 from './component/Todo5/Todo5';

import './index.css';
import App from './App';

// const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

