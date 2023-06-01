import Header from './components/Header'
import Projects from './components/Projects'

import githubIcon from './assets/icons/github-svgrepo-com.svg'
import linkedinIcon from './assets/icons/linkedin-svgrepo-com.svg'
import gmailIcon from './assets/icons/gmail-svgrepo-com.svg'
import Contact from './components/Contact'

function App() {
    return (
        <div className='site-wrapper'>
            <Header/>
            <main className=''>
                <section className='contact-section'>
                    <h2>contact</h2>
                    I am open and ready to put my Energy, commitment and abilities in your hands. If you are interested in my services do not hesitate to contact me
                    <div className='contacts-container'>
                        <Contact 
                            to='https://www.linkedin.com/in/orlando-leyva/'
                            icon={linkedinIcon}
                            text='Visit me on Linkedin'
                            account='linkedin'
                        />

                        <Contact 
                            to='https://github.com/OrlandoLeyva'
                            icon={githubIcon}
                            text='Visit on GitHUb'
                            account='github'
                        />

                        <Contact 
                            to='mailto:leyvaorlandomx08@gmail.com'
                            icon={gmailIcon}
                            text='Send me an Email'
                            account='gmail'
                        />
                    </div>
                </section>

                <Projects />
            </main>
        </div>
    )
}

export default App
