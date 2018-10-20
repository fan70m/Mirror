import React, { Component } from "react";

class Notifier extends Component {
  render() {
    const message = this.props.offline ?
  `You are offline!`
  :
  `You are online`;
    return (
        <div>
            <p>
                <em>{message}</em>
            </p>
        </div>
    );
  }
}

export default Notifier;
