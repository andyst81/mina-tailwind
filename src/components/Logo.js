import React from "react"
import M from "../images/m.png"

const Logo = () => {

  return (
    <a className="flex font-serif items-center text-black mb-4 md:mb-0 hover:text-orange-600" href="https://minathompson.com">
        <img src={M} alt="Site logo"/>
        <span className="ml-3 text-xl">Mina Thompson</span>
    </a>
  )
}

export default Logo