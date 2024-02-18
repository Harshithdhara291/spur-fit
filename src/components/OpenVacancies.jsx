import styled from "styled-components"

export default function OpenVacancies() {
    return (
        <Container>
          <h1>Open vacancies</h1>
          <UlContainer>
            <li className="each-li">
                <h2>Senior Full-Stack Engineer</h2>
                <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>$65-85k, 0.5-1.5% equity share options</li>
                    <Button>See details</Button>
                </ul>
            </li>
            <li className="each-li">
                <h2>Senior Designer</h2>
                <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>$40-55k, 0.25-0.5% equity share options</li>
                    <Button>See details</Button>
                </ul>
            </li>
            <li className="each-li">
                <h2>Superstar intern</h2>
                <ul>
                    <li>Full-time position</li>
                    <li>Berlin or remote</li>
                    <li>$20-24k, 0.5-1.50% equity share options</li>
                    <Button>See details</Button>
                </ul>
            </li>
          </UlContainer>
        </Container>
      )
    }
    
const Container = styled.div`
    min-height: 90vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* border: 1px solid red; */
    padding-left:4rem;
    padding-top: 2rem;
    h1{
        font-size: 4rem;
    }
`

const UlContainer = styled.ul`
    list-style-type: none;
    /* border: 1px solid red; */
    height: 17rem;
    padding-left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2rem;
    width: 90%;
    padding: 1rem 0;
    .each-li{
        background-color: #fef7f1;
        border-radius: 1rem;
        padding: 1.5rem;
        width: 31%;
        cursor: pointer;
        position: relative;
        transition: background-color 1s ease;
        &:hover {
            background-color: #fadec6;
            transition: transform 1s ease;
        button {
            display: inline;
            transform: translateY(0);
        }
  }
        ul{
            list-style-type: disc;
        }

        h2{
            font-size: 1.5rem;
        }
    }
`
const Button = styled.button`
  background-color: #000000;
  color: #fff;
  border: none;
  padding: .8rem 1.2rem;
  border-radius: 1.6rem;
  margin-top: 1rem;
  display: none;
  transition: opacity 1s ease, transform 1s ease;
  transform: translateY(10px);
`;