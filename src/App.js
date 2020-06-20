import React from 'react';
import initialState from './initialState';
import Header from './Header';
import FeaturesList from './Features/FeaturesList';


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
// import slugify from 'slugify';
import './App.css';

class App extends React.Component {
  state = initialState

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
      <div>
        <Header />
  
        <main>
          <FeaturesList state={this.state} updateFeature={this.updateFeature}/>
        </main>
      </div>
    )
  }
}

export default App