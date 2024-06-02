'use client';

export default function Error({ onRetry }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={onRetry}>Try again</button>
    </div>
  );
}
