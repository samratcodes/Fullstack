"use client"
import { useState } from 'react';
import Error from './error';

export default function ErrorPage() {
  const [hasError, setHasError] = useState(false);

  function simulateError() {
    setHasError(true);
      throw  Error('Simulated error occurred!');
   
  }

  function handleRetry() {
    setHasError(false);
  }

  return (
    <div>
      <h1>Error Page</h1>
      {hasError ? (
        <Error onRetry={handleRetry} />
      ) : (
        <button onClick={simulateError}>Simulate Error</button>
      )}
    </div>
  );
}
