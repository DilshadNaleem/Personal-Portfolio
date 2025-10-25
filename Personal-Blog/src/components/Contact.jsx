import { FaLinkedinIn } from 'react-icons/fa';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    return (
        <>
            <div className="heading">
                <h1>Contact</h1>
            </div>

            <div className="contacts">
                <a href="tel:+94725958832" className="contact-item">
                    <FaPhone />
                    <span className='details'>(+94) 72 595 8832</span>
                </a>
                
                <a href="mailto:dilshadnaleem13@gmail.com" className="contact-item">
                    <FaEnvelope />
                    <span className='details'>dilshadnaleem13@gmail.com</span>
                </a>
                
                <a href="https://github.com/DilshadNaleem" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaGithub />
                    <span className='details'>Dilshad Naleem</span>
                </a>
                
                <a href="https://www.linkedin.com/in/dilshad-naleem-26a40a310/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaLinkedinIn />
                    <span className='details'>Dilshad Naleem</span>
                </a>
            </div>
        </>
    )
}

export default Contact;