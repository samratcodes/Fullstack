
import Link from 'next/link';
export default function ContactLayout({ children }) {
    return (
      <section>
         <div>
      This is the page folder for the Contact component.
      This Has navigation inside the navigation
    </div>
        <nav className='bg-black p-2 m-2 rounded-lg w-max text-white'>
            <Link className='m-2' href="/Contact">Contact</Link>
            <Link className='m-2' href="/Contact/Ram">Ram</Link>
            </nav>
                   
        <div>{children}</div>
      </section>
    );
  }
  