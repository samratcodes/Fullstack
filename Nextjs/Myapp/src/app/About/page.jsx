"use client";
import React from 'react';
import { useRouter } from 'next/navigation'

const Page = () => {
 const router = useRouter(); 
  return (
    <div>
      Page!
      <p>This is some random text added to the page component.</p>

      <button type="button" className='bg-black rounded-3xl p-2 m-3 text-white' onClick={() => router.push('/Contact')}>
      Go To Contact
    </button>
    </div>
  );
};

export default Page;
