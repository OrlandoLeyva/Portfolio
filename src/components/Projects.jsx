import { useRef, useState } from "react"
import Project from "./Project"
import projectsData from '../data'

export default function Projects() {
    const [projectsToDisplay, setProjectsToDisplay] = useState('basic')
    const [projects] = useState(projectsData)
    const reactButtonRef = useRef()
    const basicsButtonRef = useRef()

    function select(e){
        if (e.target == basicsButtonRef.current) {
            setProjectsToDisplay('basic')
        } else {
            setProjectsToDisplay('react')
        }
    }

    const projectsToRender = projects.filter(project => project.type == projectsToDisplay)
    const projectsEl = projectsToRender.map((project, i) =>  (<Project key={i} data={project}/>) )

    return (
        <section className="projects-section">
            <h2>Projects</h2>
            <div className="switch-projects-buttons">
                <button
                    ref={basicsButtonRef}
                    onClick={select} 
                    className={`show-projects-button ${projectsToDisplay == 'basic' ? 'selected' : ''}`}>Basics</button>
                <button
                    ref={reactButtonRef}
                    onClick={select} 
                    className={`show-projects-button ${projectsToDisplay == 'react' ? 'selected' : ''}`}>React</button>
            </div>

            <div className="projects">
                {projectsEl}
            </div>
        </section>
    )
}