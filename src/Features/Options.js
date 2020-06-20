import React from 'react';
import USCurrencyFormat from '../utils/Currency';


function Options(props) {
  return (
    <div className='feature__item'>
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        //  set it's value to checked based on if it's name matches the name selected in state
        checked={props.option.name === props.selected[props.feature].name}
        //  when a button is selected, update state to reflect the new selected option
        onChange={(e) => props.updateFeature(props.feature, props.option)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.option.name} ({USCurrencyFormat.format(props.option.cost)})
      </label>
    </div>
  );
}

export default Options