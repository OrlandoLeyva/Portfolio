import orlandoLeyvaPicture from '../assets/images/orlando-picture-two.jpg'

export default function Header(){
    return (
        <header>
            <div className="presentation-card">
                <img src={orlandoLeyvaPicture} alt="orlando picture" />
                <div className="card-details">
                    <h2>Orlando Leyva</h2>
                    <p>Frontend Developer</p>
                    <p>Sonora, Mexico</p>
                </div>
            </div>
            <div className="about">
                <h2>About me</h2>
                <p>
                    Hello, I am Orlando. Frontend Developer with a passion for creating users-friendly interfaces that provide an excellent user experience. I am proficient with HTML, CSS, JavaScript and React. I like to stay updated with web development trends and best practices. I consider myself as a disciplined and responsible person. I love working in a team and believe that effective communication is a crucial aspect in every job. Empathy, respect and honesty are principles that guide my life. 
                </p>
            </div>
        </header>
    )
}