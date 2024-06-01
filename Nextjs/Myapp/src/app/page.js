import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js Journey</h1>
        <p className="text-lg">Hello World!</p>
      </section>
      
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">What I Learned Today</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Installation</h3>
          <p>
            Today, I started my journey with Next.js. The first step was to set up the project. I installed Next.js using the following command:
          </p>
          <code className="block bg-gray-200 p-2 rounded mt-2">npx create-next-app@latest my-next-app</code>
          <p className="mt-2">
            This command bootstraps a new Next.js project with all the necessary configurations.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Project Structure</h3>
          <p>
            Next, I explored the project structure. Here's a brief overview of the key directories and files:
          </p>
          <ul class="list-disc list-inside">
  <li class="mb-4 font-bold">Top-level folders:
    <ul class="list-disc list-inside ml-4">
      <li>app (App Router)</li>
      <li>pages (Pages Router)</li>
      <li>public (Static assets)</li>
    </ul>
  </li>
  <li class="mb-4 font-bold">Top-level files:
    <ul class="list-disc list-inside ml-4">
      <li>next.config.js (Next.js config)</li>
      <li>package.json (Dependencies)</li>
      <li>.env (Environment variables)</li>
    </ul>
  </li>
  <li class="mb-4  font-bold">App Routing:
    <ul class="list-disc list-inside ml-4">
      <li>layout.js, page.js, route.js</li>
    </ul>
  </li>
  <li class="mb-4 font-bold">Pages Routing:
    <ul class="list-disc list-inside ml-4">
      <li>_app.js, _document.js, _error.js</li>
    </ul>
  </li>
  <li class="mb-4  font-bold">Dynamic Routes:
    <ul class="list-disc list-inside ml-4">
      <li>[folder]/index.js, [...folder]/index.js</li>
    </ul>
  </li>
</ul>

        </div>
        <div>
          <h3 className="text-xl font-bold">Routing Basics</h3>
          <p>
            I learned about the basic routing mechanism in Next.js. Each file in the <code>pages/</code> directory automatically becomes a route in the application. For example:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><code>app/page.jsx</code>: Renders at <code>/</code> (the home page).</li>
            <li><code>app/About/page.jsx</code>: Renders at <code>/about</code>.</li>
            <li><code>app/Contact/pages.jsx</code>: Renders at <code>/contact</code>.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
