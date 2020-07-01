import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Todo from './component/Todo1/Todo';
import Todo2 from './component/Todo2/Todo2';
import TodoList from './component/Todo3/TodoList';
import Todo4 from './component/Todo4/Todo4';
// import Todo5 from './component/Todo5/Todo5';

import './component/Todo2/Todo2.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/todo1' component={Todo} />
        <Route path='/todo2' component={Todo2} />
        <Route path='/todo3' component={TodoList} />
        <Route path='/redux' component={Todo4} />
        {/* <Route path='/todo5' component={Todo5} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
