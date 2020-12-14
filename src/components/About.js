import React from "react"
import mina from "../images/mina.png"

const About = () => {
  return (
    <section className="text-gray-700">
      <div className="container px-5 py-5 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg overflow-hidden">
            <img alt="content" className="mx-auto" src={mina} />
            <p className="font-serif mt-4 text-orange-500 text-lg text-center">
              Bullet Journal | 
              Art | 
              Recipes | 
              Photography
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img className='rounded-full' src="https://s.gravatar.com/avatar/8f08d0d1922a14fcb3398b7ff9bb0a9f?s=100" alt="This is me!"/>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-serif mt-4 text-gray-900 text-lg">Mina Thompson</h2>
                <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                <p className="font-sans text-lg text-gray-700">Hi! I’m Mina. Welcome to my corner of the internet where I post about all the things I create.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left place-self-center">
              <p className="leading-relaxed text-base mb-4">
                I love designing and making beautiful things. I am a watercolor artist,
                calligapher and word artist, food and product photographer, blogger, and bullet journalist.
                On top of that I am a ketogenic foodie - I love all things realted to good food.
                This website is a portfolio of my work and my chance to reach out to the world.
              </p>
              <a className="text-orange-500 inline-flex items-center hover:text-orange-600" href="https://minathompson.com/about">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About