import React from 'react'

type ImagePropsTypes = {
    imageUrl: string,
}

const Image = ({imageUrl}: ImagePropsTypes) => {
    const imageSrc = imageUrl.replace('images', '');
  return (
    <img src={`http://localhost:3000/${imageSrc}`} className='h-52 w-52' />
  )
}

export default Image