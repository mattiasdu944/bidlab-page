
import { NavMenu, HeroSection, AboutSection, GameSection, ContactSection, TeamSection } from './components'

const App = () => {
    return (
        <main>
            <NavMenu />
            <HeroSection />
            <div className='bg-content'>
                <AboutSection />
                <GameSection />
                <TeamSection />
                <ContactSection />
            </div>


        </main>
    )
}

export default App