import styled from "styled-components"
import flower from '../assets/flower.avif'
import cartoons from '../assets/cartoon.png'

export default function MeetAhead() {
  return (
    <Container>
      <ImageCont>
        <img src={flower} alt="not-found" />
      </ImageCont>
      <SecondContainer>
        <p>Built out of frustration</p>
        <h2>Meet the ahead app</h2>
        <div>
          <img src={cartoons} alt="not-found" />
          <div>
          <p>Sed faucibus mauris id est fermentum, id rhoncus nunc sagittis. Nulla aliquet quam id ultricies dictum. Phasellus in nisi sed ligula dictum fermentum.</p>
          <p> Quisque id odio sed urna fringilla blandit. Nam at convallis odio, in pulvinar lorem.</p>
          </div>
        </div>
      </SecondContainer>
    </Container>
  )
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #FEF7F1;
    padding: 2rem;
    margin: 5rem 0 3rem 0;
    position: relative;
    border-radius: 2rem;
    
`

const SecondContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 5rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  p{
    margin: 0px;
    font-size: 1.5rem;
  }
  h2{
    font-size: 4rem;
  }
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 3rem;
    img{
      height: 20rem;
      width: 30rem;
      /* mix-blend-mode: multiply; */
    }
    div{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      width: 50%;
    }
    p{
      margin: 6px 0;
    }
  }
`

const ImageCont = styled.div`
  width: 95%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: end;
  position: absolute;
    top: -8%;
  img{
    height: 8rem;
    width: 8rem;
    mix-blend-mode: multiply;
    
  }
`
