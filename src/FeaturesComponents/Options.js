import React from 'react';
import slugify from 'slugify';
//    this component will show the options available for a given feature

function Options(props) {
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  const options = props.features[props.featureName].map((item, index) => {
    return (
      <div key={index} className="feature__item">
        <input
          type="radio"
          id={item.name}
          className="feature__option"
          name={slugify(item.name)}
          //  set it's value to checked based on if it's name matches the name selected in state
          checked={item.name === props.selected[props.featureName].name}
          //  when a button is selected, update state to reflect the new selected option
          onChange={() => {props.updateFeature(props.featureName, item)}}
        />
        <label className="feature__label">
          {/* display item name and price to user */}
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  });
  return options;
}


export default Options