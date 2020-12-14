import React from "react"

const Form = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-serif mb-4 text-gray-900">Join the List</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Join my mailing list to get notifications when I release a new product or add more art resources. No spam - I promise</p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end">
          <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Button</button>
        </div>
      </div>
    </section>
  )
}

export default Form