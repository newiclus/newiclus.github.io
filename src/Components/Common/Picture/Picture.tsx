import React from 'react';
import { ESize } from '../../../Config/_enums';

interface IPicture {
  src: string,
  alt: string,
  size?: ESize,
  circular?: boolean
}

function Picture({src, alt, size, circular}: IPicture) {
  const isCircular = circular ? 'picture__circular' : '';

  return (
    <figure className={`picture picture__size--${size} ${isCircular}`}>
      <img alt={alt} src={src} />
    </figure>
  )
}


export {
  Picture
}
