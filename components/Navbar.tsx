"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links= [
    {name: 'Home', href: '/'},
    {name: 'Product', href: '/products'},
    {name: 'Print', href: '/print'},
    {name: 'Frame', href: '/frame'}
]

const Navbar = () => {

    const pathname = usePathname()

  return (
    <header className="flex">
    <div className="flex-none sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1">
      <Link href='/'>
      <h1>Hello</h1>        
      </Link>
    
    </div>
    <nav className="hidden gap-12 lg:flex">
        {links.map((link, idx) => (
            <div key={idx}>
                {pathname === link.href? (
                    <Link className='text-lg font-semibold' href={link.href}>
                        {link.name}
                    </Link>
                ): (
                    <Link className='text-lg font-semibold' href={link.href}>
                        {link.name}
                    </Link>
                )
                }
            </div>
        ))}
     </nav> 
     <div>
        <button>
            Add to cart
        </button>
     </div>
    </header>
  )
}

export default Navbar
