import React from 'react';
import styles from './Picture.module.scss';
import { ESize } from '../../../Config/_enums';

interface IPicture {
  src: string,
  alt: string,
  size?: ESize,
  circular?: boolean
}

function Picture({src, alt, size, circular}: IPicture) {
  const isCircular = circular ? 'picture__circular' : '';
  const sizePicture = `picture__size--${size}`;

  return (
    <figure className={`${styles.picture} ${styles[sizePicture]} ${styles[isCircular]}`}>
      <img alt={alt} src={src} />
    </figure>
  )
}


export {
  Picture
}
