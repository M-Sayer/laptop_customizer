import React from 'react';
import Total from './Total';
import List from './List';

export default function Cart(props) {
  return (
    <div>
      <List selected={props.selected} />
      <Total selected={props.selected} />
    </div>
  );
}
