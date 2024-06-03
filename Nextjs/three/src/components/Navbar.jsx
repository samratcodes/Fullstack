import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="bg-gray-500 text-white p-4 shadow-lg">
    <div className="container mx-auto flex items-center justify-between">
     
      <ul className="flex space-x-8">
        <li>
          <Link href="/">
            <span className="cursor-pointer hover:text-gray-400 transition duration-300">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/Route">
            <span className="cursor-pointer hover:text-gray-400 transition duration-300">Catch all route</span>
          </Link>
        </li>
        <li>
          <Link href="/Route/2">
            <span className="cursor-pointer hover:text-gray-400 transition duration-300">Catch all route2</span>
          </Link>
        </li>
        <li>
          <Link href="/Route2">
            <span className="cursor-pointer hover:text-gray-400 transition duration-300">Normal Routes</span>
          </Link>
        </li>
        <li>
        <Link href="/Route3/1111">
            <span className="cursor-pointer hover:text-gray-400 transition duration-300">Normal Dynamic route</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
