import styled from "styled-components"
import numbers from '../assets/numbers.png'
import anonymous from '../assets/anonymous.png'

export default function FlowCharts() {
    return (
        <Container>
          <p>Let your friends, family, co-workers (anonymously) rate our social skills</p>
          <h1>Ever wondered what others think of you ?</h1>
          <NumsCont>
            <img src={numbers} alt="img" />
            <div>
                <p>Answer questions on your social skills</p>
                <p>Let others anonymously answers the same questions about you</p>
                <p>Find out hwere you and others see things on the same way - and where not!</p>
            </div>
          </NumsCont>
          <img src={anonymous} alt="img" />
        </Container>
      )
    }
    
const Container = styled.div`
    min-height: 120vh;
    background-color: #EDF8FE;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 4rem 2rem;
    border-radius: 2rem;
    p{
        font-size: 1.4rem;
        margin: 0px;
    }
    h1{
        font-size: 3.5rem;
    }
    img{
        border-radius: 1.3rem;
        margin-left: 2rem;
        /* border: 1px solid red; */
    }
`

const NumsCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    height: 20rem;
    img{
        width: 80%;
        /* border: 1px solid red; */
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        /* border: 1px solid red; */
        width: 75%;
        p{
            max-width: 15rem;
            text-align: center;
            font-size: 1rem;
            /* border: 1px solid red; */
        }
    }
`
