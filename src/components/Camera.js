import React, { Component } from 'react';
import { Webcam } from '../webcam';

class Camera extends Component {
  constructor() {
    super();
    this.webcam = null;
  }

  componentDidMount() {
    // initialize the camera
    this.canvasElement = document.createElement('canvas');
    this.webcam = new Webcam(
        document.getElementById('webcam'),
        this.canvasElement
    );
    this.webcam.setup().catch(() => {
        alert('Error getting access to your camera');
    });
  }

  render() {
    const webcam = {
      position: "fixed",
      right: "0",
      bottom: "0",
      minWidth: "100%",
      minHeight: "100%",
      width: "auto",
      height: "auto",
      zIndex: "-100",
  };

    return (
      <video autoPlay="true" id="webcam" style={webcam} />
    )
  }
}

export default Camera;
