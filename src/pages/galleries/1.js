import React from "react"
import Layout from "../../components/Layout"
import GalleryLightbox from "../../components/gallery-lightbox"
import IMAGES from "../../components/images/1"


export default () => {
  return (
    <Layout>
      <h2 className="text-3xl text-gray-900 font-serif mb-2 py-12 text-center">Gallery 1</h2>
      <GalleryLightbox IMAGES={IMAGES}/>
    </Layout>
  )
}