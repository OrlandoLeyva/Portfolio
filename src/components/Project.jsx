/* eslint-disable react/prop-types */
export default function Project(props) {
    const {data: project} = props

    return (
        <div className="project">
            <img src={`${project.poster}`} alt="" className="project-poster" />
            <h2 className="project-name">{project.name}</h2>
            <h1 className="project-description">{project.description}</h1>
            <div className="view-project-links">
                <a href="">visit project on live</a>
                <a href="">visit project repository</a>
            </div>
        </div>
    )
}

// {
//     // id:
//     name: 'project name',
//     description: 'project description',
//     poster: 'project poster path',
//     type: 'react'
// }