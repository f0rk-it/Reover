import '../styles/landingpage.css'
import HeroSection from '../components/Hero'
import NavBar from '../components/NavBar'
import CreditSection from '../components/Credits'

export default function LandingPage () {
    return (
        <>
            <NavBar />

            <section id='design'>
                <HeroSection />
            </section>

            <section id='credits'>
                <CreditSection />
            </section>
        </>
    )
}