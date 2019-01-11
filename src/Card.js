import React from "react";
import Slider, { Range } from "rc-slider";
import styled from "styled-components";
import ReactDOM from "react-dom";

import "rc-slider/assets/index.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.scale = this.scale.bind(this);
    this.rotate = this.rotate.bind(this);
  }

  scale(value) {
    const cardwrapper = ReactDOM.findDOMNode(this);
    console.log(value);
    cardwrapper.style.width = `${(value / 100) * 100 + 300}px`;
    cardwrapper.style.height = `${(value / 100) * 150 + 470.813}px`;
  }

  rotate(value) {
    const cardImg = ReactDOM.findDOMNode(this).firstElementChild.nextSibling
      .firstElementChild;
    console.log(value);
    cardImg.style.transform = `rotate(${(value / 100) * 360 + 360}deg) 
    scale(${(value / 100) * 1 + 1})`;
  }

  render() {
    return (
      <StyledCard>
        <div className="card card-header">
          <h2>{this.props.title}</h2>
        </div>
        <div className="card card-body">
          <img src={this.props.src} alt="" />
          <p>Lorem ipsum dolor sit ame</p>
        </div>
        <div className="card card-footer">
          {" "}
          <div>
            {" "}
            <p>Slide Me</p>
            <Slider onChange={this.scale} />{" "}
          </div>
          <div>
            {" "}
            <p>Try me too</p>
            <Slider onChange={this.rotate} />{" "}
          </div>
        </div>
      </StyledCard>
    );
  }
}

export default Card;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  width: 300px;
  height: 470.813px;
  background-color: #f4f4f4;
  background: #f4f4f4;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  transition: all 0.2s;
  margin-right: 3rem;
  margin-bottom: 3rem;
  .card {
    display: flex;
    padding: 0.5rem 1rem;
    flex-direction: column;
    &-header {
      text-transform: capitalize;

      justify-content: center;
      aligh-items: center;
      height: 15%;
      h2 {
        margin: 0;
        padding: 0;
      }
    }
    &-body {
      display: flex;
      height: 70%;
      text-align: left;
      img {
        height: 80%;
        object-fit: cover;
        border-radius: 5px;
        object-position: 50% -20%;
      }
    }
    &-footer {
      height: 30%;
      background-color: #e3e3e3;

      > div {
        width: 100%;
        text-align: left;
        p {
          font-size: 0.8rem;
          margin: 0.5rem;
        }
      }
    }
  }
`;
