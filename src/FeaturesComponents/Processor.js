import React from 'react';
import Options from './Options';

//    this component will display the feature type
//    below that it will display each feature option
//    each feature option will display the name and price of that otion

function Processor(props) {
  return (
    <fieldset className="feature">
      <legend className="feature__name">
        <h3>Processor</h3>
      </legend>
      {<Options updateFeature={props.updateFeature} selected={props.selected} features={props.features} featureName="Processor"/>}
    </fieldset>
  )
}

export default Processor