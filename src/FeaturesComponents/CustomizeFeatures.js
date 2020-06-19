import React from 'react';
import Processor from './Processor';
import OperatingSystem from './OperatingSystem';
import VideoCard from './VideoCard';
import Display from './Display';

//    this component will hold all features components

function CustomizeFeatures(props) {
  return (
    <div>
      <Processor {...props}/>
      <OperatingSystem {...props}/>
      <VideoCard {...props}/>
      <Display {...props}/>
    </div>
  )
}

export default CustomizeFeatures