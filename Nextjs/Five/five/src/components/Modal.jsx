"use client";
import { useRef } from "react";
import { useRouter } from 'next/navigation'
export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter()
const handleClick = () => {
router.back()
}
  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black bg-opacity-60 p-10"
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6 bg-white rounded-lg shadow-lg"
      >
        {children}
        <button onClick={handleClick}>
        Close
      </button>
      </div>
     
    </div>
  );
}
