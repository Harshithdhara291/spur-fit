import styled, { keyframes } from "styled-components";
import appstore from "../assets/appstore.png";
import { FaStar } from "react-icons/fa";
import mobile from "../assets/mobile.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <Container>
      <motion.div
        className="left-cont"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
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
      </motion.div>
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
  .left-cont {
    width: 38%;
    @media (max-width: 991px) {
    width:90%;
  }
  }
  @media (max-width: 991px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  }
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
  @media (max-width: 991px) {
    width: 100%;
  }
  img {
    height: 28rem;
    width: 30rem;
    border-radius: 8rem;
    animation: ${rotateAnimation} 10s linear infinite;
    @media (max-width: 991px) {
      height: 15rem;
      width: 17rem;
      margin-top: 2rem;
    }
  }
`;

const LeftContainer = styled.div`
  /* width: 38%; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  /* border: 1px solid red; */
  height: 25rem;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    @media (max-width: 991px) {
      /* margin-left: 3rem; */
      text-align: center;
    }
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    margin: 0;

    @media (max-width: 991px) {
      font-size: 2rem;
      font-weight: 500;
      text-align: center;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media (max-width: 991px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
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
