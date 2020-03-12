import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoHome from './containers/TodoHome';
import 'normalize.css/normalize.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <TodoHome />
      </div>
    </Provider>
  );
}

export default App;
