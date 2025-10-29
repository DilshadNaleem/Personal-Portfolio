import { useState } from "react";
import './Services.css';
import DevelopmentServices from "./DevelopmentServices";

function Services() {
    const [showPopup, setShowPopup] = useState(false);

    const handleContactClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {/* 3D Background */}
            <div className="services-background">
                <div className="three-d-background">
                    <div className="light-beam"></div>
                    <div className="light-beam-2"></div>
                    <div className="grid-lines"></div>
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
            </div>

            {/* Content */}
            <div className="services-container">
                <div className="services-heading"> 
                    <h1>Web, Mobile, Frontend & AI Solutions for Modern Business</h1>
                </div>

                <div className="paragraph">
                    Expert Full Stack Developer specializing in cutting-edge web applications, responsive frontend websites, cross-platform mobile solutions,
                    and intelligent AI Integrations with Deep Learning Models that drives business growth and innovation.
                </div>

                <div className="contact">
                    <button className="contact-button" onClick={handleContactClick}>
                        Start New Project
                    </button>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-button" onClick={handleClosePopup}>✕</button>
                        <h2>Contact Me</h2>

                        <div className="contact-options">
                            <div className="contact-option">
                                <p>Send me an email to Discuss your Project: </p>
                                <a href="mailto:dilshadnaleem13@gmail.com" className="email-link">
                                    📧 Email
                                </a>
                            </div>

                            <div className="contact-option">
                                <a href="tel:+94725958832">📞 Call</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </>

        
    )
}

export default Services;