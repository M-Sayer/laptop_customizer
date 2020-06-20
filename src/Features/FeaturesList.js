import React from 'react';
import Options from './Options';

//    this component will hold all features components

function FeaturesList(props) {
  //  For each feature in state, create a feature component
  const features = Object.keys(props.state.features).map((feature, index) => {
    
    const options = props.state.features[feature].map((item, idx) => {
      console.log(item)
      return (
      <Options key={idx} option={item} feature={feature} selected={props.state.selected} updateFeature={props.updateFeature}/>
    )})
    
    return (
      <fieldset className="feature" key={index}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
          {options}
      </fieldset>
    )
  })
  
  return (
    <div className="FeaturesList">
      {features}
    </div>  
    )
}


export default FeaturesList