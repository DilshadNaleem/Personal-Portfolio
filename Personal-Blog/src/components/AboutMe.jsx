import './AboutMe.css';

function AboutMe()
{
    return (
      <>
      <br /> <br /><br />
        <div className="heading">
          <h1>About Me</h1>
        </div>
        <div className="my-Self">
          <p>
            Aspiring Software Engineer with strong foundation in full-stack
            development, object oriented programming (OOP), database management
            and Software Automation Testing. Currently pursuing B.Sc.(Hons) in
            Software Engineering at Cardiff Metropolitan University. Residing in
            Colombo, Sri Lanka. I am passionate about developing innovative
            software solutions with Cloud Computing in efficiency and
            scalability.
          </p> <br />

          <p>
            Proficient in HTML, CSS, JavaScript, PHP, C++, C#, Java and Python
            with hands-on experience in React for frontend development, as well
            as ASP.NET, SOAP, REST, RESTful, Fast APIs integration, and Java
            Servlets. Skilled in developing scalable web applications, mobile
            applications, AI models, RESTful APIs, enterprise-level solutions,
            and cloud-based solutions using Amazon Web Services (AWS).
            Experienced in both frontend and backend development, with a focus
            on serverside programming, web services, microservices architecture,
            and database management using SQL and NoSQL databases deployments.
          </p> <br />

          <p>
            Familiar with collaborative environments using git, CI/CD, Docker,
            and DevOps practices. I have a strong interest in Artificial
            Intelligence and Full Stack development, and am eager to apply my
            skills in real-world projects while continuing to grow in cloud
            computing, performance optimization, and software engineering best
            practices and architectures.
          </p> <br />
        </div>

        {/* 👇 NEW CONTAINER TO PLACE SECTIONS SIDE-BY-SIDE 👇 */}
        <div className="info-sections-container">
            <div className="education">
                <h1>Education</h1>
                <ul>
                    <li>
                        <span className="marker">
                            <span className="course-title">AWS Student Course</span>
                            <span className="campus">AWS Online </span>
                            <div className="date">July 2025 - Present</div> <br />
                        </span>
                    </li>

                    <li>
                        <span className="marker">
                            <span className="course-title">
                                B.Sc. (Hons) in Software Engineering
                            </span>
                            <span className="campus">Cardiff Metropolitan University</span>
                            <span className="date">March 2023 - November 2026</span> <br />
                        </span>
                    </li>

                    <li>
                        <span className="marker">
                            <span className="course-title">Diploma in Computing</span>
                            <span className="campus">ICBT Campus, Colombo</span>
                            <span className="date">December 2022</span> <br />
                        </span>
                    </li>

                    <li>
                        <span className="marker">
                            <span className="course-title">G.C.E. Advanced Level</span>
                            <span className="campus">Private Candidate</span>
                            <span className="date">December 2024</span> <br />
                        </span>
                    </li>

                    <li>
                        <span className="marker">
                            <span className="course-title">G.C.E. Ordinary Level</span>
                            <span className="campus">
                                Henry Olcott Maha Vidyalaya, Kolonnawa
                            </span>
                            <span className="date">December 2019</span> <br />
                        </span>
                    </li>
                </ul>
            </div>
            {/* The existing <br /> is removed as Flexbox handles spacing */}

            <div className="languages">
    <h1>Languages</h1> <br />
    <div className="language-item">
        <span className="language-name">English</span>
        <div className="language-bar">
            <div className="language-progress" data-progress="100%"></div>
        </div>
        <span className="language-level">Fluent</span>
    </div>
    <div className="language-item">
        <span className="language-name">Tamil  </span>
        <div className="language-bar">
            <div className="language-progress" data-progress="100%"></div>
        </div>
        <span className="language-level">Fluent</span>
    </div>
    <div className="language-item">
        <span className="language-name">Sinhala</span>
        <div className="language-bar">
            <div className="language-progress" data-progress="100%"></div>
        </div>
        <span className="language-level">Fluent</span>
    </div>
</div>
        </div>
      </>
    );
}

export default AboutMe;