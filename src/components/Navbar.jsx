import logoImage from '../assets/app-logo.png'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 py-3">
  <div className="container-fluid">
    <Image src={logoImage} alt='not-found' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Container className="collapse navbar-collapse" id="navbarNav">
      <Ullist className="navbar-nav">
        <li className="nav-item">
          <a style={{color:"#000",fontWeight:"600"}} className="nav-link"  href="#">Emotions</a>
        </li>
        <li className="nav-item">
          <a style={{color:"#000",fontWeight:"600"}} className="nav-link" href="#">Manifesto</a>
        </li>
        <li className="nav-item">
          <a style={{color:"#000",fontWeight:"600"}} className="nav-link" href="#">Self-awareness test</a>
        </li>
        <li className="nav-item">
          <a style={{color:"#000",fontWeight:"600"}} className="nav-link" href="#">Work With Us</a>
        </li>
      </Ullist>
      <Button>Download App</Button>
    </Container>
  </div>
</nav>
  )
}

const Image = styled.img`
    height: 4rem;
    width: 4rem;
    border-radius: 1rem;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    /* border: 1px solid red; */
`

const Ullist = styled.ul`
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
`

const Button = styled.ul`
    background-color: #1d1d1d;
    padding: .8rem 1rem;
    color: #fff;
    border-radius: 30px;
    cursor: pointer;
    border: none;
`