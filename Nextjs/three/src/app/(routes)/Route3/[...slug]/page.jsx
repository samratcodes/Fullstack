import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1 className=' text-2xl '>This is a dynamic route in Route3/{params.slug}
      <hr />
      The {params.slug} is a dynamic segment that can be accessed via the params object in your page component.
      </h1>

      <div>
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Dynamic Routing in Next.js</h2>
      <p className="text-gray-700 mb-4">
        Dynamic routing in Next.js allows you to handle dynamic content by creating pages with file names containing dynamic segments.
      </p>
      <p className="text-gray-700 mb-4">
        For example, if you have a file named `[slug].js` inside the `pages` directory, Next.js will dynamically generate routes based on the value of the `slug` parameter in the URL.
      </p>
      <p className="text-gray-700 mb-4">
        This enables you to create dynamic and personalized experiences for users based on the URL they visit.
      </p>
      <p className="text-gray-700">
        To access dynamic parameters in your components, you can use the `useRouter` hook provided by Next.js.
      </p>
    </div>
      </div>
    </div>
  )
}

export default page
