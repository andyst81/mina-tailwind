import React from 'react';
import Gallery from './gallery/Gallery';

const GalleryLightbox = ({IMAGES}) => {
        return (
                <section className="text-grey-700">
                        <div className="container px-5 mx-auto">
                                <div style={{
                                        display: "block",
                                        overflow: "auto",
                                        alignContent: "center",
                                        backgroundColor: "white"
                                        }}>
                                        <Gallery
                                                images={IMAGES}
                                                enableImageSelection={false}
                                                showLightboxThumbnails={true}
                                                backdropClosesModal={true}
                                        />
                                </div>
                        </div>
                </section>
        )
}

export default GalleryLightbox