/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components"
import { motion } from "framer-motion";

export default function Test() {
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
            <p className="para1" >We take privacy seriously</p>
            <h2>Before you get started</h2>
            <p className="para2" >"We wont share your answers with anyone ( and wont tell<br/> your which friend told about you) "</p>
            <p className="para3" >with love, <span>Team ahead</span></p>
            <button>Start a test</button>
            <p className="para4" >Take only 5 minutes</p>
          </motion.div>
        </Container>
      )
    }
    
const Container = styled.div`
    min-height: 130vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:8rem 0;
    h2{
        font-size: 2.8rem;
        color: #000;
        font-weight: 600;
    }
    button{
        background-color: #1d1d1d;
        padding: .8rem 1rem;
        color: #fff;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin:1rem 0;
    }
    .para1{
        font-size: 1.4rem;
        color: #000;
        font-weight: 400;
    }
    .para2{
        font-size: 1.7rem;
        color: #555555;
        font-weight: 400;
    }
    .para3{
        font-size: 1.5rem;
        color: #000;
        font-weight: 400;
        span{
            font-size: 2.5rem;
            font-family: "Dancing Script", cursive;
        }
    }
    .para4{
        font-size: 1.2rem;
        color: #727272;
        font-weight: 400;
    }
`