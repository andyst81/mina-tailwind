import React from "react"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="text-black bg-orange-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-orange-600" href="https://minathompson.com">Home</a>
          <a className="mr-5 hover:text-orange-600" href="/blog">Blog</a>
          <a className="mr-5 hover:text-orange-600" href="https://minathompson.com/about">About Me</a>
          <a className="mr-5 hover:text-orange-600" href="https://minathompson.com/contact">Contact</a>
          <a className="mr-5 hover:text-orange-600" href="https://minathompson.com/freebies">Freebies</a>
          <div className="bg-orange-400 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base">
            <a className="inline-flex items-center hover:text-orange-600" href="https://minathompson.com/shop">Shop
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header