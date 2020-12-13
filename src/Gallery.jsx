import React, { useState } from 'react'
import images from './ImgList'
import './Gallery.css'

function Gallery() {

    const [selectedImage, setSelectedImage] = useState(images[0])

    return (
        <div className='container'>
            <img src={selectedImage} alt="Selected" className='selected'/>
            <div className='imgContainer'>
                {images.map((img, index) => (
                    <img
                    style={{border: selectedImage === img ? "4px solid aqua" : null}} 
                    src={img} 
                    key="index" 
                    alt="dog"
                    onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery
