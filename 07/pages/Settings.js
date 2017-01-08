import React from "react";

export default class Settings extends React.Component {
  render() {

    console.log("props from Settings");
    console.log(this.props);

    return (
      <div>
        <h1>Settings</h1>
      </div>
    );
  }
}
