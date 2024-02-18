import styled from "styled-components";
import logo from "../assets/app-logo.png";
import appstore from "../assets/appstore.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <Container>
      <img src={logo} alt="logo" className="logo" />
      <h2>ahead</h2>
      <div>
        <p>
          <FaLocationDot className="icon" /> Auguststabe 26, 10117 Berlin
        </p>
        <p>
          <IoMail className="icon" /> hi@head-app.com
        </p>
      </div>
      <img src={appstore} alt="app store" className="app-store" />
      <p className="rights">© 2024 Ahead app. All rights reserved</p>
    </Container>
  );
}

const Container = styled.div`
  min-height: 70vh;
  width: 100%;
  background-color: #fff;
  border-top: 3px solid #ecedf1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 991px) {
    min-height: 100vh;
  }

  h2 {
    margin-top: 1rem;
    color: #6341ef;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    /* border: 1px solid red; */
    width: 38%;
    @media (max-width: 991px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem 0;
      /* border: 1px solid red; */
      width: 100%;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
      .icon {
        border: 6px solid #98efd6;
        font-size: 2rem;
        background-color: #98efd6;
        border-radius: 50%;
        margin-right: 6px;
      }
    }
  }
  .logo {
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 1rem;
  }
  .app-store {
    height: 3rem;
    width: 10rem;
    margin: 1rem 0;
  }
  p {
    margin: 0px;
  }
  .rights {
    color: #6b6b6b;
  }
`;
