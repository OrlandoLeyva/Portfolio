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
                    Hello, I am Orlando. Frontend Developer with a passion for creating digital products that give an excellent users experience. I consider myself as a  disciplined and responsible person.
                </p>
            </div>
        </header>
    )
}