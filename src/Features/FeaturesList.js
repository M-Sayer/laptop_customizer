import React from 'react';
import Options from './Options';
import slugify from 'slugify';

//    this component will hold all features components

function FeaturesList(props) {
  //  For each feature in state, create a feature component
  const features = Object.keys(props.features).map((feature, index) => {
    const featureHash = feature + '-' + index;
    const options = props.features[feature].map((item, idx) => {
      const itemHash = slugify(JSON.stringify(item));
        return (
        <Options 
          key={itemHash} 
          itemHash={itemHash}
          option={item} 
          feature={feature} 
          selected={props.selected} 
          updateFeature={props.updateFeature}
          />
      );
    });
    
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
  
  return (
    <form className="main__form">
      <h2>Customize Your Laptop</h2>
      {features}
    </form>  
    )

}


export default FeaturesList