import React from 'react';
import ItemButton from '../ItemButton/ItemButton';

const ButtonDropdown = () => (
  <div>
    <span>...</span>
    <div>
      <ItemButton text="Done" />
      <ItemButton text="Edit" />
      <ItemButton text="Delete" />
    </div>
  </div>
);

export default ButtonDropdown;
