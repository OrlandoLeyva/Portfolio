/* eslint-disable react/prop-types */
export default function Contact(props){
    const {to, icon, text, account} = props
    return (
        <a className='contact' href={to} target="_blank" rel="noreferrer">
        
            <img src={icon} alt={`${account} Icon`} className="contact-icon"/>
            <p>{text}</p>
        </a>
    )
}