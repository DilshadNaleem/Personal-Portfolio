import React, { useState, useEffect } from 'react';
import './Intro.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    FaReact, FaMobileAlt, FaRobot, FaCode, FaCloud, FaCodeBranch, FaDesktop, FaBug,
    FaJs, FaPython, FaJava, FaDatabase, FaNodeJs, FaAws, FaDocker, FaGitAlt,
    FaHandshake,
    FaDownload,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaFacebook,
    FaEnvelope,
    FaInstagram
} from 'react-icons/fa';

function Intro({ scrollToProjects , scrollToContact}) {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    const roles = [
        "AI/ML Engineer",
        "Full Stack Development",
        "Mobile Development",
        "Custom Development",
        "Content Creator"
    ];

    const [currentRole, setCurrentRole] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && currentRole === roles[currentIndex]) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && currentRole === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % roles.length);
            } else {
                setCurrentRole(
                    isDeleting
                        ? roles[currentIndex].substring(0, currentRole.length - 1)
                        : roles[currentIndex].substring(0, currentRole.length + 1)
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [currentRole, isDeleting, currentIndex, roles]);

    // Array of icons for rotation
    const techIcons = [
        <FaJs key="js" />,
        <FaPython key="python" />,
        <FaJava key="java" />,
        <FaDatabase key="database" />,
        <FaNodeJs key="nodejs" />,
        <FaReact key="react" />,
        <FaAws key="aws" />,
        <FaDocker key="docker" />,
        <FaGitAlt key="git" />,
        <FaCode key="code" />,
        <FaCloud key="cloud" />,
        <FaMobileAlt key="mobile" />
    ];

    return (
        <div className="intro-container">
            <div className="intro-text-section" data-aos="fade-up" data-aos-delay="100">
                <br />
                <h1 className="name-heading" data-aos="fade-up" data-aos-delay="200">
                    Mohammed Naleem Mohammed Dilshad
                </h1>
                <div className="changing-post" data-aos="fade-up" data-aos-delay="300">
                    <span className="typing-text">
                        {currentRole}
                        <span className="cursor">|</span>
                    </span>
                </div>
                <h4 className="tagline" data-aos="fade-up" data-aos-delay="400">
                    Specializing in web app development, mobile app development, and cutting-edge AI solutions. Transform your ideas into powerful digital experiences within short period of time.
                </h4>
            </div>

            <div className="services-and-code-section">
                <div className="service-boxes-grid">
                    {/* Service Box 1: React & Next.js Development */}
                    <div className="service-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-icon-bg">
                            <FaReact className="service-icon" />
                        </div>
                        <h3>React.js Development</h3>
                        <p>Modern web applications with optimal performance</p>
                    </div>

                    {/* Service Box 2: React Native Apps */}
                    <div className="service-box" data-aos="fade-up" data-aos-delay="150">
                        <div className="service-icon-bg">
                            <FaMobileAlt className="service-icon" />
                        </div>
                        <h3>React Native Apps</h3>
                        <p>Cross-platform mobile solutions</p>
                    </div>

                    {/* Service Box 3: AI Integration */}
                    <div className="service-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-icon-bg">
                            <FaRobot className="service-icon" />
                        </div>
                        <h3>AI Integration</h3>
                        <p>Smart automation and machine learning</p>
                    </div>

                    {/* Service Box 4: Custom Software */}
                    <div className="service-box" data-aos="fade-up" data-aos-delay="250">
                        <div className="service-icon-bg">
                            <FaCode className="service-icon" />
                        </div>
                        <h3>Custom Software</h3>
                        <p>Tailored solutions for your business needs</p>
                    </div>

                    <div className="service-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-icon-bg">
                            <FaCloud className="service-icon" />
                        </div>
                        <h3>Cloud Software Solutions</h3>
                        <p>Scalable, reliable, and secure cloud infrastructure</p>
                    </div>

                    <div className="service-box" data-aos="fade-up" data-aos-delay="350">
                        <div className="service-icon-bg">
                            <FaCodeBranch className="service-icon" />
                        </div>
                        <h3>API Integration</h3>
                        <p>Implementing and deploying scalabale microservices and REST architecture to power complex applications and handle high traffic loads.</p>
                    </div>

                    <div className="service-box" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-icon-bg">
                            <FaDesktop className="service-icon" />
                        </div>
                        <h3>Desktop Applicaiton</h3>
                        <p>Developing high performance, reliable desktop applicaiton using modern frameworks for a fast, native user experience</p>
                    </div>

                    <div className="service-box" data-aos="fade-up" data-aos-delay="450">
                        <div className="service-icon-bg">
                            <FaBug className="service-icon" />
                        </div>
                        <h3>Software Automation Testing</h3>
                        <p>Ensuring application quality, performance, and reliability through rigorous testing protocols.</p>
                    </div>
                </div>

                {/* This is the code snippet section with the blurred background effect */}
                <div className="animated-code-snippet" data-aos="fade-left" data-aos-delay="500">
                    <pre>
                        <code>
                            {`const solution = 'innovative';
function buildApp() {
  return <Success />;
}
AI.integrate(solution);`}
                        </code>
                    </pre>
                    {/* Container for rotating icons */}
                    <div className="rotating-icons-container">
                        {techIcons.map((IconComponent, index) => (
                            <div
                                key={index}
                                className="rotating-icon"
                                style={{ '--i': index, '--total': techIcons.length }}
                            >
                                {IconComponent}
                            </div>
                        ))}
                    </div>
                    {/* Optional: Add some background shapes/blobs for the blur effect */}
                    <div className="blur-blob one"></div>
                    <div className="blur-blob two"></div>
                    <div className="blur-blob three"></div>
                </div>
            </div>

            <div className="cta-Buttons" data-aos="fade-up" data-aos-delay="600">
                <div className="Buttons">
                    <button className="my-Works" data-aos="zoom-in" data-aos-delay="700" onClick={scrollToProjects}>
                        <FaCodeBranch className="button-icon" /> Explore My Works
                    </button>

                    <button className="hire-me" data-aos="zoom-in" data-aos-delay="750" onClick={ scrollToContact}>
                        <FaHandshake className="button-icon" /> Hire Me
                    </button>

                    <button
                   onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/pdf/M.N.M.Dilshad.pdf';
                    link.download = 'Dilshad Naleem';
                    link.click();
                   }}
                    className="download-CV" data-aos="zoom-in" data-aos-delay="800">
                        <FaDownload className="button-icon" /> Download CV
                    </button>
                </div>
            </div>

            <div className="social-icons" data-aos="fade-up" data-aos-delay="900">
                <a href="https://www.linkedin.com/in/dilshad-naleem-26a40a310/" className='social-icon LinkedIn' 
                target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className='social-icon' />
                </a>

                <a href="https://github.com/DilshadNaleem" className='social-icon Github'
                target='_blank' 
                rel='noopener noreferrer'>
                    <FaGithub className='social-icon'/>
                </a>

                <a href="https://www.youtube.com/@Unknown-so8sm" className='social-icon youtube'
                target='_blank'
                rel='noopener noreferrer'>
                    <FaYoutube className='social-icon'/>
                </a>

                <a href="https://www.facebook.com/share/1CmKR4mMTA/" className='social-icon facebook'
                target='_blank'
                rel='noopener noreferrer'>
                    <FaFacebook className='social-icon'/>
                </a>

                <a href="https://www.instagram.com/dilshad_naleem_dilshad/?hl=en" className='social-icon instagram'
                target='_blank'
                rel='noopener noreferrer'>
                    <FaInstagram className='social-icon'/>
                </a>

                <a href="mailto:dilshadnaleem13@gmail.com" className='social-icon Email'
                target='_blank'
                rel='noopener noreferrer'>
                    <FaEnvelope className='social-icon'/>
                </a>
            </div>
        </div>
    );
}

export default Intro;