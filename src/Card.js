import React from "react";
import Slider, { Range } from "rc-slider";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: column;
  .card {
    display: flex;
    padding: 1rem;
    width: 100%;

    &-header {
      background-color: pink;
      text-transform: capitalize;
      justify-content: center;
    }
    &-body {
      background-color: violet;
    }
    &-footer {
      background-color: blue;
      height: 100px;
    }
  }
`;

import "rc-slider/assets/index.css";

class Card extends React.Component {
  render() {
    return (
      <div>
        <StyledCard>
          <div className="card card-header">{this.props.title}</div>
          <div className="card card-body">body</div>
          <div className="card card-footer">
            {" "}
            <Slider />{" "}
          </div>
        </StyledCard>
      </div>
    );
  }
}
export default Card;
