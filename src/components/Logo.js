import React from "react"
import M from "../images/m.png"
import MT from "../images/mt.png"

const Logo = () => {

  return (
    <a className="flex font-serif items-center text-black mb-4 md:mb-0 hover:text-orange-600" href="/">
        <img src={M} alt="Site logo"/>
        <img src={MT} alt="Site logo"/>
    </a>
  )
}

export default Logo