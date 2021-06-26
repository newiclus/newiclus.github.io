import React from 'react'
import styles from './Tag.module.scss';
import { ESize } from '../../../Config/_enums';

interface ITag {
  name: string,
  color?: string,
  size?: ESize
}

function Tag({name, size, color = 'default'}: ITag) {
  const hasSize = size ? `tag__size--${size}` : '';
  const tagColor = `tag__color--${color}`;

  return (
    <label className={`${styles.tag} ${styles[tagColor]} ${styles[hasSize]}`}>{name}</label>
  );
}

export {
  Tag
}