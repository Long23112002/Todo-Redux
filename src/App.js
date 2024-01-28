import React from 'react';
import Filter from './components/Filter/Filter';
import TodoMenu from './components/TodoMenu/TodoMenu';

function App() {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="card" style={containerStyle}>
      <div className='card-header  w-50 text-center '> <h1>TodoApp_Redux</h1></div>
      <div className="card-body w-50">
        <Filter />
        <TodoMenu />
      </div>
    </div>
  );
}

export default App;
