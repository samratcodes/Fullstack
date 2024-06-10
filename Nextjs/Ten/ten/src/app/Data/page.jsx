'use client';

import { useState } from 'react';
import { handleFormSubmit } from './action';

export default function Page() {
  const [message, setMessage] = useState('');
  const [syncMessage, setSyncMessage] = useState('');
  const [asyncMessage, setAsyncMessage] = useState('');

  // Synchronous function
  function handleSyncClick() {
    setSyncMessage('Synchronous task completed');
  }

  // Asynchronous function
  async function handleAsyncClick() {
    setAsyncMessage('Starting asynchronous task...');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setAsyncMessage('Asynchronous task completed');
  }

  // Form submit handler
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await handleFormSubmit(formData);
    setMessage(result.message);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Sync and Async Example</h1>

      <h2 className="text-2xl font-semibold mb-2">Synchronous Task</h2>
      <button 
        onClick={handleSyncClick} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Run Synchronous Task
      </button>
      <p className="mt-2 text-green-600">{syncMessage}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Asynchronous Task</h2>
      <button 
        onClick={handleAsyncClick} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Run Asynchronous Task
      </button>
      <p className="mt-2 text-green-600">{asyncMessage}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Form Submission (Server Action)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">
            Name:
            <input 
              type="text" 
              name="name" 
              required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div>
          <label className="block font-medium">
            Email:
            <input 
              type="email" 
              name="email" 
              required 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <button 
          type="submit" 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
      <p className="mt-4 text-green-600">{message}</p>
    </div>
  );
}
