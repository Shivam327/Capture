/* eslint-disable no-unused-vars */
import React from "react";
//Importing Icon
import clock from "../image/clock.svg";
import diaphragm from "../image/diaphragm.svg";
import money from "../image/money.svg";
import teamwork from "../image/teamwork.svg";
import home2 from "../image/home2.png";
//Style
import { About, Description, Hide, Image } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>Quality</span> service
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    color: yellowgreen;
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;
