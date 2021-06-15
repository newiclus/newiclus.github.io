import React from 'react'
import { ESize } from '../../../Config/_enums';

interface ITag {
  name: string,
  color?: string,
  size?: ESize
}

function Tag({name, size, color = 'default'}: ITag) {
  const hasSize = size ? `tag__size--${size}` : '';

  return (
    <label className={`tag tag__color--${color} ${hasSize}`}>{name}</label>
  );
}

export {
  Tag
}