import React from "react"

const GalleryDisp = () => {
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
              <a href="/galleries/1">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg" /> 
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a href="/galleries/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg" />
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg" />
            </div>
          </div>
          <div className="flex flex-wrap sm:w-full md:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default GalleryDisp