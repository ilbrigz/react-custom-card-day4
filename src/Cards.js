import React from "react";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

export default Cards;
