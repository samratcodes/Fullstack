'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">
            <span className="cursor-pointer hover:text-gray-400 transition duration-300">MyLogo</span>
          </Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/">
              <span className="cursor-pointer hover:text-gray-400 transition duration-300">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <span className="cursor-pointer hover:text-gray-400 transition duration-300">Setting</span>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <span className="cursor-pointer hover:text-gray-400 transition duration-300">parallel</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
