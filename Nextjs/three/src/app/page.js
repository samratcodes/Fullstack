"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
export default function Home() {

  const router = useRouter();
  const [todayLearned] = useState([
    "Redirecting",
    "Route Groups",
    "Project Organization",
    "Dynamic Routes"
  ]);
const handleClick = () => {
  router.push('/Route2')
}
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Today I Have Learned:</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
      >
        Redirect
      </button>
      <ul className="list-disc pl-6">
        {todayLearned.map((topic, index) => (
          <li key={index} className="mb-2">{topic}</li>
        ))}
      </ul>
    </div>
  );
}
