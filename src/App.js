import React, { Component } from 'react';
import CustomizeFeatures from './FeaturesComponents/CustomizeFeatures';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  //  state keeps track of selected options from imported list of available features
  
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  //  changes the selected feature in state to the user selected option
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    //    LIST OF AVAILABLE FEATURES & OPTIONS FOR EACH FEATURE
    //    BREAK UP INTO SEPARATE LIST COMPS. BY FEATURE
    //  create an array of keys from imported features object
    //  map through array of keys, and for each key...
    const features = Object.keys(this.props.features).map((feature, idx) => {
      
      const featureHash = feature + '-' + idx;
      //  create an array of options for a selected feature by accessing FEATURES[feature]
      //  map through option objects, and for each option, 
      // const options = this.props.features[feature].map(item => {
      //   const itemHash = slugify(JSON.stringify(item));
      //   //  return a div item
      //   return (
      //     <div key={itemHash} className="feature__item">
      //       <input
      //         type="radio"
      //         id={itemHash}
      //         className="feature__option"
      //         name={slugify(feature)}
      //         //  set it's value to checked based on if it's name matches the name selected in state
      //         checked={item.name === this.state.selected[feature].name}
      //         //  when a button is selected, update state to reflect the new selected option
      //         onChange={e => this.updateFeature(feature, item)}
      //       />
      //       <label htmlFor={itemHash} className="feature__label">
      //         {/* display item name and price to user */}
      //         {item.name} ({USCurrencyFormat.format(item.cost)})
      //       </label>
      //     </div>
      //   );
      // });
      //  ... create a field for a feature and its available options
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {/* {options} */}
        </fieldset>
      );
    });

    //    CART - CHANGE TO CART COMPONENT
    //  create an array of keys from selected options in state, and for each key:feature
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      //  set the selected option equal to the name & price values in the feature object
      const selectedOption = this.state.selected[feature];
      //  return a div for each selected option (creating a list of selected options i.e. cart)
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

      //    RETURN FOR RENDER CALL
      //    KEEP AS APP COMPONENT CALLING CHILD COMPS.
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {/* CHANGE THIS TO CustomizeFeatures COMP.  */}
            <CustomizeFeatures updateFeature={this.updateFeature}selected={this.state.selected} features={this.props.features}/>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {/* CHANGE THIS TO Cart COMP. */}
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
