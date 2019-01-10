import React from "react";
import styled from "styled-components";

const StyledCards = styled.div`
  & {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    margin-top: 3rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: -3rem;
  }
`;

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <StyledCards>{this.props.children}</StyledCards>;
  }
}

export default Cards;
