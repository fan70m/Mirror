import React, { Component } from 'react';
import './App.css';
import Notifier from './components/Notifier';
import Camera from "./components/Camera";

class App extends Component {
  constructor() {
    super();
    this.state = {
      offline: false
    }
  }

  componentDidMount() {
    window.addEventListener('online', () => {
      this.setState({ offline: false });
    });

    window.addEventListener('offline', () => {
      this.setState({ offline: true });
    });
  }

  componentDidUpdate() {
    let offlineStatus = !navigator.onLine;
    if (this.state.offline !== offlineStatus) {
      this.setState({ offline: offlineStatus });
    }
  }

  render() {
    return (
      <div className="App">
        <Notifier offline={this.state.offline} />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="" />
          <h1 className="App-title">Mirror</h1>
        </header> */}
        <Camera/>
      </div>
    );
  }
}

export default App;
