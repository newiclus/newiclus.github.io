import React from 'react';
import styles from './SectionTitle.module.scss';

interface ISection {
  name: string
}

function SectionTitle({ name }: ISection) {
  return (
    <div className={styles['section-title']}>
      <h2 className={styles['section-title__name']}>{name}</h2>
      <span className={styles['section-title__division']} />
    </div>
  );
}

export {
  SectionTitle
}