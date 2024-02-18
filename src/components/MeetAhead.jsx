import styled from "styled-components";
import flower from "../assets/flower.avif";
import cartoons from "../assets/cartoon.png";
import { motion } from "framer-motion";

export default function MeetAhead() {
  return (
    <Container>
      <ImageCont>
        <img src={flower} alt="not-found" />
      </ImageCont>
      <SecondContainer>
        <motion.div
          className="top"
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <p>Built out of frustration</p>
          <h2>Meet the ahead app</h2>
        </motion.div>

        <div>
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
          <img src={cartoons} alt="not-found" 
          
          /></motion.div>
          <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
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
              Sed faucibus mauris id est fermentum, id rhoncus nunc sagittis.
              Nulla aliquet quam id ultricies dictum. Phasellus in nisi sed
              ligula dictum fermentum.
            </p>
            <p>
              {" "}
              Quisque id odio sed urna fringilla blandit. Nam at convallis odio,
              in pulvinar lorem.
            </p>
          </motion.div>
        </div>
      </SecondContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: #fef7f1;
  padding: 2rem;
  margin: 5rem 0 3rem 0;
  position: relative;
  border-radius: 2rem;
`;

const SecondContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 5rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  p {
    margin: 0px;
    font-size: 1.5rem;
  }
  h2 {
    font-size: 4rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 3rem;
    img {
      height: 20rem;
      width: 30rem;
      /* mix-blend-mode: multiply; */
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      width: 50%;
    }
    p {
      margin: 6px 0;
    }
  }
`;

const ImageCont = styled.div`
  width: 95%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: end;
  position: absolute;
  top: -8%;
  img {
    height: 8rem;
    width: 8rem;
    mix-blend-mode: multiply;
  }
`;
