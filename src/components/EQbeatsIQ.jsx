import styled from "styled-components";
import { motion } from "framer-motion";

export default function EQbeatsIQ() {
  return (
    <Container>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{x:0,opacity:1}}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <h2>EQ beats IQ</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
          mauris id est fermentum, id rhoncus nunc sagittis.{" "}
        </p>
        <p>
          {" "}
          Nulla aliquet quam id ultricies dictum. Phasellus in nisi sed ligula
          dictum fermentum. Quisque id odio sed urna fringilla blandit. Nam at
        </p>
      </motion.div>
    </Container>
  );
}

const Container = styled.div`
  min-height: 80vh;
  background-color: #fff;
  padding-top: 10rem;
  @media (max-width: 991px) {
    min-height: 60vh;
  }
  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding: 3rem 2rem;
    padding-top: 8rem;
    @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
  }
  }
  /* border: 1px solid red; */
  p {
    width: 30%;
    font-size: 1.3rem;
    color: #686868;
    @media (max-width: 991px) {
    width: 90%;
    text-align: center;
    margin: 1rem 0;
  }
  }
`;
