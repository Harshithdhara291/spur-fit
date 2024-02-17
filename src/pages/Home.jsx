import styled from "styled-components"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import EQbeatsIQ from "../components/EQbeatsIQ"
import Slides from "../components/Slides"
import MeetAhead from "../components/MeetAhead"
import SelfImprovement from "../components/SelfImprovement"
import BetheBest from "../components/Bethebest"

export default function Home() {
  return (
    <Container>
      <Navbar />
      <HeroSection/>
      <EQbeatsIQ/>
      <Slides/>
      <MeetAhead/>
      <SelfImprovement/>
      <BetheBest/>
    </Container>
  )
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #fff;
    padding: 0 2.5rem;
`