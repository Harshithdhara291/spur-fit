import styled, { keyframes } from "styled-components";
import appstore from "../assets/appstore.png";
import { FaStar } from "react-icons/fa";
import mobile from "../assets/mobile.png";

export default function HeroSection() {
  return (
    <Container>
      <LeftContainer>
        <p>Ahead app</p>
        <h1>Master your life by mastering emotions</h1>
        <div>
          <img src={appstore} alt="not-found" />
          <div>
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>100+ Appstore reviews</p>
          </div>
        </div>
      </LeftContainer>
      <MobileContainer>
        <img src={mobile} alt="not-found" />
      </MobileContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: #eeebfe;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 2rem;
`;


const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const MobileContainer = styled.div`
  width: 40%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: center;
  justify-content: center;
  img {
    height: 28rem;
    width: 30rem;
    border-radius: 8rem;
   animation: ${rotateAnimation} 10s linear infinite;
  }
`;


const LeftContainer = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  /* border: 1px solid red; */
  height: 25rem;
  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    margin: 0;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    img {
      height: 2.5rem;
      width: 9rem;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0;
      /* border: 1px solid red; */
      div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: gold;
        width: 80%;
        gap: 10px;
        /* border: 1px solid red; */
      }
    }
  }
`;
