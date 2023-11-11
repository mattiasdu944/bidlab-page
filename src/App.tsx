
import { NavMenu, HeroSection, AboutSection, GameSection, ContactSection } from './components'

const App = () => {
    return (
        <main>
            <NavMenu />
            <HeroSection />
            <div className='bg-content'>
                <AboutSection />
                <GameSection />
                <ContactSection />
            </div>


        </main>
    )
}

export default App