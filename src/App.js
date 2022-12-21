import './index.css';
import React from 'react';

function App() {

  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        <h2 className='mb-6 text-4xl font-normal text-black-500 lg:text-xl sm:px-16 xl:px-48 dark:text-black-400'>Счетчик:</h2>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-7xl lg:text-6xl dark">{count}</h1>
        <button onClick={onClickMinus} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-red-500 hover:border-transparent rounded">- Минус</button>
        <button onClick={onClickPlus} className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-green-500 hover:border-transparent rounded">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
