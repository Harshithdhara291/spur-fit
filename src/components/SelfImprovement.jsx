/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components"
import sadFace from '../assets/sadface.png'
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
    {
      id: 1,
      head: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      head: "Dolor Sit",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit."
    },
    {
      id: 3,
      head: "Consectetur Adipiscing",
      para: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      head: "Elit Sed",
      para: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 5,
      head: "Tempor Incididunt",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];
    

export default function SelfImprovement() {
  return (
    <Container>
      <motion.div
      className="top"
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
        <p>Wrong with self-improvment & how we're fixing it</p>
        <div>
            <h1>Self-improvement. Ugh.</h1>
            <img src={sadFace} alt="img" />
        </div>
        </motion.div>
        <motion.ul
        initial={{ y: 200, opacity: 0 }}
        whileInView={{y:0,opacity:1}}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 60,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        >
            {data.map((each)=>{
                return(
                    <li key={each.id}>
                        <h2><FaCircleIcon/> {each.head}</h2>
                        <p>{each.para}</p>
                    </li>
                )
            })}
        </motion.ul>
    </Container>
)
}

const Container = styled.div`
  min-height: 150vh;
  background-color: #fff;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  p{
    font-size: 1.5rem;
    margin: 0px;
    font-weight: 500;
    /* color: #000000bc; */
  }
  div{
    display: flex;
    justify-content: flex-start;
    align-items: end;
    h1{
        font-size: 3.5rem;
        font-weight: 800;
    }
  }
  ul{
    padding-left: 0px;
    width: 90%;
    list-style-type:none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    padding: 2rem 0;
    padding-top: 25rem;
    margin-top: 2rem;
    height: 25rem;
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 8px; 
  }
  &::-webkit-scrollbar-track {
    background: #e4e4e4; 
  }
  &::-webkit-scrollbar-thumb {
    background: #B3A0FA; 
    border-radius: 5px; 
  }
    li{
        width: 60%;
        margin: .4rem 0;
        padding: .6rem;
        color: #7c7c7c;
        cursor: pointer;
        &:hover{
            color: #000;
        }
        h2{
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        p{
            margin-left: 2.5rem;
        }
    }
  }
`

const FaCircleIcon = styled(FaCircle)`
    color: #6340EF;
    font-size: 2rem;
    margin-right: 8px; 
    border: 6px solid #F0EEFC;
    border-radius: 50%;
`