import HeroSection from "../components/HeroSection/HeroSection"
import Navbar from "../components/Navbar"
import { NavbarTop } from "../components/NavbarTop"


export const Home = () => {
  return (
    <div className="container mx-auto pt-[32px]">
    <NavbarTop/>
    <Navbar/>
    <HeroSection/>
    </div>
    
  )
}
