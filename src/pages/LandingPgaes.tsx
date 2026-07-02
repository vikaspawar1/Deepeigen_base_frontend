import HeroSection from '../components/landing/HeroSection'
import Courses from '../components/landing/Courses'
import FAQ from './FAQ'

const LandingPage = () => {
    return (
        <div>
            <HeroSection />

            <Courses />
            {/* <AI_model /> */}
            <FAQ />
        </div>
    )
}

export default LandingPage