import React, { useState } from 'react';
import './App.css';
import FibGrid from './components/fib-grid.tsx';

function App() {
  const [hits, setHits] = useState(0);
  const [clicks, setClicks] = useState(0);

  return (
    <React.Fragment>
      <h1 className="p-3">Fib Grid</h1>
      <div>
        Collect the smallest possible number of Fibonacci hits with the highest
        number of clicks.
      </div>
      <h5 className="">
        Clicks: <span className="font-bold">{clicks}</span> Hits:{' '}
        <span className="font-bold">{hits}</span>
      </h5>
      <FibGrid
        incrementClicks={() => setClicks((prev) => prev + 1)}
        incrementHits={() => setHits((prev) => prev + 1)}
      />
      <p className="footer">Made with ❤️ & ☕️ by JZ</p>
    </React.Fragment>
  );
}

export default App;
