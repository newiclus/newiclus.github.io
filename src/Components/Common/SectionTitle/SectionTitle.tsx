import React from 'react';

interface ISection {
  name: string
}

function SectionTitle({ name }: ISection) {
  return (
    <div className="section-title">
      <h2 className="section-title__name">{name}</h2>
      <span className="section-title__division" />
    </div>
  );
}

export {
  SectionTitle
}