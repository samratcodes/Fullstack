import React from 'react'

const page = ({params}) => {
  return (
    <div>
     
<h1 className=' text-3xl '> Route 1 : as you can see the link in the route has : 
     {params.slug?params.slug:'Nothing'}
</h1>

     now click on another link to find out next route
      <div>
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Optional Catch-all Segments</h2>
      <p className="text-gray-700 mb-2">
        Optional catch-all segments allow you to define routes where a segment can match zero or more parts of a URL path.
        This means that the segment can be present or absent in the URL, and if present, it can capture multiple parts of the URL.
      </p>
      <p className="text-gray-700 mb-2">
        To make a catch-all segment optional, you include the parameter in double square brackets: <code className="bg-gray-200 px-2 py-1 rounded-md">[[...folderName]]</code>.
      </p>
      <p className="text-gray-700 mb-2">
        For example, consider the route <code className="bg-gray-200 px-2 py-1 rounded-md">app/shop/[[...slug]]/page.js</code>.
        This route will match URLs like <code className="bg-gray-200 px-2 py-1 rounded-md">/shop</code>, <code className="bg-gray-200 px-2 py-1 rounded-md">/shop/clothes</code>, <code className="bg-gray-200 px-2 py-1 rounded-md">/shop/clothes/tops</code>, <code className="bg-gray-200 px-2 py-1 rounded-md">/shop/clothes/tops/t-shirts</code>, and so on.
      </p>
      <p className="text-gray-700 mb-2">
        The key difference between catch-all and optional catch-all segments is that with optional catch-all segments, the route without the parameter is also matched.
        In other words, if the segment is absent in the URL, the route still matches.
      </p>
      <h3 className="text-lg font-semibold mt-4">Example URLs and Params:</h3>
      <table className="w-full border-collapse border border-gray-300 mt-2">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 p-2">Route</th>
            <th className="border border-gray-300 p-2">Example URL</th>
            <th className="border border-gray-300 p-2">Params</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">app/shop/[[...slug]]/page.js</td>
            <td className="border border-gray-300 p-2">/shop</td>
            <td className="border border-gray-300 p-2">{`{}`}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">app/shop/[[...slug]]/page.js</td>
            <td className="border border-gray-300 p-2">/shop/a</td>
            <td className="border border-gray-300 p-2">{`{ slug: ['a'] }`}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">app/shop/[[...slug]]/page.js</td>
            <td className="border border-gray-300 p-2">/shop/a/b</td>
            <td className="border border-gray-300 p-2">{`{ slug: ['a', 'b'] }`}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">app/shop/[[...slug]]/page.js</td>
            <td className="border border-gray-300 p-2">/shop/a/b/c</td>
            <td className="border border-gray-300 p-2">{`{ slug: ['a', 'b', 'c'] }`}</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
    </div>
  )
}

export default page
