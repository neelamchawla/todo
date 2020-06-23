import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Todo from './component/Todo';
// import Box from './component/Box';
// import Todo2 from './component/todo2/Todo2';
import './component/todo2/Todo2.css';

function App() {
  return (
    <div className="App">
      <Todo />
      {/* <Box /> */}
      {/* <Todo2 /> */}
    </div>
  );
}

export default App;
