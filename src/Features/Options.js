import React from 'react';
import USCurrencyFormat from '../utils/Currency';


function Options(props) {
  // console.log(props.option.name)
  // console.log(props.selected[props.feature].name)
  return (
    <>
      <input
        type="radio"
        id={props.option.name}
        className="feature__option"
        name={props.option.name}
        //  set it's value to checked based on if it's name matches the name selected in state
        checked={props.option.name === props.selected[props.feature].name}
        //  when a button is selected, update state to reflect the new selected option
        onChange={() => props.updateFeature(props.feature, props.option)}
      />
      <label className="feature__label">
        {props.option.name} ({USCurrencyFormat.format(props.option.cost)})
      </label>
    </>
  )
}

export default Options