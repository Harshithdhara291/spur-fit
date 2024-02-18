import styled from "styled-components";
import numbers from "../assets/numbers.png";
import anonymous from "../assets/anonymous.png";
import { motion } from "framer-motion";

export default function FlowCharts() {
  return (
    <Container>
      <motion.div
        style={{ textAlign: "center" }}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <p>
          Let your friends, family, co-workers (anonymously) rate our social
          skills
        </p>
        <h1>Ever wondered what others think of you ?</h1>
      </motion.div>
      <motion.div
        initial={{ x: 90, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <NumsCont>
          <img src={numbers} alt="img" />
          <div>
            <p>Answer questions on your social skills</p>
            <p>Let others anonymously answers the same questions about you</p>
            <p>
              Find out hwere you and others see things on the same way - and
              where not!
            </p>
          </div>
        </NumsCont>
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <img src={anonymous} alt="img" />
      </motion.div>
    </Container>
  );
}

const Container = styled.div`
  min-height: 120vh;
  background-color: #edf8fe;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 4rem 2rem;
  border-radius: 2rem;
  @media (max-width: 991px) {
      min-height: 100vh;
    }
  p {
    font-size: 1.4rem;
    margin: 0px;
    @media (max-width: 991px) {
      font-size: 1rem;
    }
  }
  h1 {
    font-size: 3.5rem;
    @media (max-width: 991px) {
      font-size: 2rem;
    }
  }
  img {
    border-radius: 1.3rem;
    margin-left: 2rem;
    @media (max-width: 991px) {
      margin-left: 1rem;
      height: 6rem;
      width: 16rem;
    }
    /* border: 1px solid red; */
  }
`;

const NumsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  height: 20rem;
  img {
    width: 80%;
    height: 3rem;
    @media (max-width: 991px) {
      width: 90%;
    }
    /* border: 1px solid red; */
    
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /* border: 1px solid red; */
    width: 100%;
    p {
      max-width: 15rem;
      text-align: center;
      font-size: 1rem;
      @media (max-width: 991px) {
        max-width: 8rem;
      text-align: center;
      font-size: .7rem;
    }
      /* border: 1px solid red; */
    }
  }
`;
