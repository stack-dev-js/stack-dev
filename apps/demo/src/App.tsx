import { useState } from 'react';

import { Button as CssButton } from '@stack-dev/react-css';
import { Button as StyledComponentsButton } from '@stack-dev/react-styled-components';

export function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
      }}
    >
      <h1>Stack-Dev App</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100px',
          }}
        >
          <button onClick={handleClick}>Count is {count}</button>
          <CssButton onClick={handleClick}> Count is {count}</CssButton>
          <StyledComponentsButton onClick={handleClick}>
            Count is {count}
          </StyledComponentsButton>
        </div>
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}
