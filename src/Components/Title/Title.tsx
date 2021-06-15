import React from 'react';
import { Tag } from '../Common';
import { ESize } from '../../Config/_enums';

function Title() {
  return (
    <>
      <h1 className="title">
        Junihor <br />
        <strong>Moran</strong>
      </h1>
      <Tag name="SR WEB UI DEVELOPER" color="purple" size={ESize.medium}></Tag>
    </>
  );
}

export {
  Title
};
