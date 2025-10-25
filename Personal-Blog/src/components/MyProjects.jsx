import './MyProject.css'

function MyProjects() {
    return (
        <div className="container">
            <div className="heading">
                <h1>Projects</h1>
            </div>

            <p>Collections of my latest work in software development</p>

            {/* Project 1 */}
            <div className="card">
                <div className="card-title">
                    LivetLens
                </div>
                <div className="card-heading">
                    AI Powered User Disease Prediction & Clinical Data Platform
                </div>
                <div className="card-info">
                    A full-stack React and Flask web application integrating an XGBoost AI model for liver disease risk prediction. Features secure multi-role authentication, personalized dashboards, bulk prediction uploads, report generation, advanced data visualization, and a learning module tailored to Doctors, Researchers, and Students.
                </div>
                <div className="card-languages">
                    <span className="language-tag">React</span>
                    <span className="language-tag">Flask</span>
                    <span className="language-tag">Python</span>
                    <span className="language-tag">XGBoost</span>
                    <span className="language-tag">MongoDB</span>
                    <span className="language-tag">Data Visualization</span>
                    <span className="language-tag">Role-Based Access</span>
                    <span className="language-tag">Medical AI</span>
                </div>
                <a href="#" className="github">
                    View on GitHub <span className="github-arrow">➡️</span>
                </a>
            </div>

            {/* Project 2 */}
            <div className="card">
                <div className="card-title">
                    Mentora
                </div>
                <div className="card-heading">
                    An AI Powered Web Platform for Mental Wellness Assessment Using Lifestyle and Digital Behavior
                </div>
                <div className="card-info">
                    An AI web platform assesses mental wellness by analyzing lifestyle and digital behavior. It generates personalized mental wellness scores and content-aware recommendations to promote positive behavioral changes. Designed for individuals, parents, counselors, and educators, the platform uses Flask, React, machine learning, and MongoDB to securely provide proactive support, bridging the gap between digital habits and mental health.
                </div>
                <div className="card-languages">
                    <span className="language-tag">React</span>
                    <span className="language-tag">Flask</span>
                    <span className="language-tag">Python</span>
                    <span className="language-tag">AI/ML</span>
                    <span className="language-tag">MongoDB</span>
                    <span className="language-tag">Mental Health</span>
                    <span className="language-tag">Behavioral Analysis</span>
                </div>
                <a href="#" className="github">
                    View on GitHub <span className="github-arrow">➡️</span>
                </a>
            </div>

            {/* Project 3 */}
            <div className="card">
                <div className="card-title">
                    MovieExplorer
                </div>
                <div className="card-heading">
                    Movie Explorer Web Application
                </div>
                <div className="card-info">
                    A responsive web application that allows users to search for movies, view details, and discover trending films. Features real-time data from TMDB API with user authentication and all essential movie website functionalities.
                </div>
                <div className="card-languages">
                    <span className="language-tag">React</span>
                    <span className="language-tag">TMDB API</span>
                    <span className="language-tag">Responsive Design</span>
                    <span className="language-tag">Authentication</span>
                    <span className="language-tag">Movie Database</span>
                </div>
                <a href="#" className="github">
                    View on GitHub <span className="github-arrow">➡️</span>
                </a>
            </div>
        </div>
    )
}

export default MyProjects;