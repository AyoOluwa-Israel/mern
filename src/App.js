import React from 'react';
import Main from './components/Main';
import { store } from './store'



function App() {
  console.log(store.getState());
  return (
    <div className="App">
    <h1>Hello World!!</h1>
     <Main/>
    </div>
  );
}

export default App;
