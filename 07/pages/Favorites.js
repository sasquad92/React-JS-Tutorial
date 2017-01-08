import React from "react";

export default class Archives extends React.Component {
  render() {

    console.log("props from Favorities");
    console.log(this.props);

    return (
      <div>
        <h1>Favorites</h1>
      </div>
    );
  }
}
