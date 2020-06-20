import React from 'react';
import './App.css';

import { FEATURES, SELECTED } from './initialState';

import Header from './Header';
import FeaturesList from './Features/FeaturesList';
import Cart from './Cart/Cart';

class App extends React.Component {
  state = { features: FEATURES, selected: SELECTED};

  updateFeature = (feature, newValue) => {
    console.log('does this piece of garbage even work')
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <FeaturesList 
            features={this.state.features}
            selected={this.state.selected} 
            updateFeature={this.updateFeature}
            />
          <section className='main__summary'>
            <Cart selected={this.state.selected} />
          </section>  
        </main>
      </div>
    );
  }
}

export default App;