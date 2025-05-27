import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Counter</h2>
      <p className="text-gray-700">Count: {count}</p>
      <div className="mt-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}