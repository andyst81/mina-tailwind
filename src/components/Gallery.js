import React from "react"

const Gallery = () => {
  return (

    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-serif text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Some of My Recent Work</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Just a sample of some of the projects I've been working on recently. Click on the below images for a more 
            complete gallery of photos. All of the creative work is my own, from the artwork to the photography.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap sm:w-full md:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/ >
            </div>
          </div>
          <div className="flex flex-wrap sm:w-full md:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Gallery