import styled from "styled-components"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import EQbeatsIQ from "../components/EQbeatsIQ"
import Slides from "../components/Slides"
import MeetAhead from "../components/MeetAhead"
import SelfImprovement from "../components/SelfImprovement"
import BetheBest from "../components/Bethebest"
import FlowCharts from "../components/FlowCharts"
import Test from "../components/Test"
import WorkWithUs from "../components/WorkWithUs"
import OpenVacancies from "../components/OpenVacancies"
import Footer from "../components/Footer"

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
      <FlowCharts/>
      <Test/>
      <WorkWithUs/>
      <OpenVacancies/>
      <Footer/>
    </Container>
  )
}

const Container = styled.div`
    min-height: 100vh;
    background-color: #fff;
    padding: 0 2.5rem;
    @media (max-width: 991px) {
    padding: 1rem;
    /* padding-left: 3rem; */
  }
`