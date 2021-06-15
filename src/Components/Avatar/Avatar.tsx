import React from 'react'
import { Picture } from '../Common'
import { ESize } from '../../Config/_enums';


function Avatar() {
  return (
    <div className="avatar">
      <Picture src="/images/Avatar.png" alt="Profile image" size={ESize.small} circular />
    </div>
  );
}

export {
  Avatar
}