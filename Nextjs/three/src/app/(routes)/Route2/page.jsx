import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Dynamic Route in Route2</h2>
      <p className="text-gray-700 mb-4">
        This is a dynamic route in Route2. It's created using Next.js naming convention, which allows for dynamic routing based on file names.
      </p>
      <p className="text-gray-700 mb-4">
        Dynamic routes in Next.js allow you to handle dynamic content by creating pages with file names containing dynamic segments. These segments can be accessed via the params object in your page component.
      </p>
      <p className="text-gray-700 mb-4">
        Click on the link below to navigate to the dynamic route in Route3 and see how dynamic routing works:
      </p>
      <a href="/Route3/1111" className="text-blue-500 hover:underline">Dynamic Route in Route3</a>
    </div>
  );
}

export default Page;
