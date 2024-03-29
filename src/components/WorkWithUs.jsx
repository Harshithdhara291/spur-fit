import styled from "styled-components";
import happyFace from "../assets/happyface.png";
import { motion } from "framer-motion";

const dataArray = [
  {
    id: 1,
    head: "Lorem ipsum",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    head: "Dolor sit amet",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 3,
    head: "Consectetur adipiscing",
    para: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 4,
    head: "Sed do eiusmod",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 5,
    head: "Tempor incididunt",
    para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
  },
];

export default function WorkWithUs() {
  return (
    <Container id="work">
      <motion.div
        className="left"
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
        <LeftContainer>
          <h1>Work with us</h1>
          <AboutContainer>
            <img src={happyFace} alt="img" />
            <div>
              <h2>About</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="product">
              <h2>Product</h2>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </AboutContainer>
        </LeftContainer>
      </motion.div>
      <motion.div
        className="right"
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
        <RightContainer>
          <h1>ahead</h1>
          <ScrollContainer>
            {dataArray.map((each) => {
              return (
                <li key={each.id}>
                  <h2>
                    {each.head} {each.head}
                  </h2>
                  <p>{each.para}</p>
                </li>
              );
            })}
          </ScrollContainer>
        </RightContainer>
      </motion.div>
    </Container>
  );
}

const Container = styled.div`
  min-height: 120vh;
  border-radius: 2rem;
  padding: 4rem;
  background-color: #f3f1ff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 991px) {
    /* min-height: 200vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left {
    width: 50%;
    height: 30rem;
    @media (max-width: 991px) {
      width: 100%;
      /* min-height: 30rem; */
      /* border: 1px solid red; */
    }
  }
  .right {
    width: 35%;
    height: 45rem;
    @media (max-width: 991px) {
      width: 100%;
      /* min-height: 30rem; */
      margin-top: 39rem;
      /* border: 1px solid red; */
    }
  }
`;

const LeftContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  img {
    border-radius: 2rem;
    margin: 1rem 0 0 1rem;
  }
  h1 {
    font-size: 4rem;
    font-weight: 600;
    @media (max-width: 991px) {
      font-size: 2rem;
    }
  }
`;

const AboutContainer = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  min-height: 90%;
  border-radius: 1rem;
  /* padding: 2rem; */
  div {
    padding: 2rem;
    p {
      font-size: 1.4rem;
      color: #707070;
    }
  }
  .product {
    /* border: 1px solid red; */
    background-color: #fef7f1;
    border-radius: 1rem;
  }
`;

const RightContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 45rem;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* border: 1px solid red; */
  h1 {
    font-size: 3.8rem;
    margin: 1rem 0 1.5rem 0;
    color: #6341ef;
  }
`;

const ScrollContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background: #b3a0fa;
    border-radius: 5px;
  }
  li {
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 2rem;
    margin-bottom: 2rem;
    margin-right: 4rem;
    h2 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
