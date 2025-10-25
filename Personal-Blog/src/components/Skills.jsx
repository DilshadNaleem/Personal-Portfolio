import React, { useEffect } from 'react'; 
import { FaCode, FaCss3, FaHtml5, FaJava, FaJs, FaMap, FaPhp, FaPython } from 'react-icons/fa';
import { SiCplusplus, SiPandas } from 'react-icons/si';

import './Skills.css';
import 'devicon/devicon.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Skills() {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };


  useEffect(() => {
    
    const headings = document.querySelectorAll('.programming-languages');

    if (headings.length === 0) return;

    
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add('is-visible');
          
        } else {
         
          entry.target.classList.remove('is-visible');
        }
      });
    };

 
    const observerOptions = {
      root: null, // viewport
     
      threshold: 0.1, 
    };

    // Create and start observing all target headings
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    headings.forEach(heading => {
      observer.observe(heading);
    });

    
    return () => observer.disconnect();
  }, []); 


  return (
    <> <br />
      <div className="heading">
        <h1>Skills</h1>
      </div>

      {/* First target */}
      <div className="programming-languages">Programming Languages</div> 

      <div className="icons-container">
        {/* ... (Your Programming Languages Icons) ... */}
        <div className="icon-outline">
          <div className="icons">
             <i className="skill-icon devicon-java-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Java</span>
          </div>
        </div>
        {/* ... (rest of your programming language icons) ... */}
        <div className="icon-outline">
          <div className="icons">
             <i className="skill-icon devicon-python-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Python</span>
          </div>
        </div>
        <div className="icon-outline">
          <div className="icons">
             <i className="skill-icon devicon-css3-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>CSS</span>
          </div>
        </div>
        <div className="icon-outline">
          <div className="icons">
             <i className="skill-icon devicon-html5-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>HTML</span>
          </div>
        </div>
        <div className="icon-outline">
          <div className="icons">
             <i className="skill-icon devicon-php-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>PHP</span>
          </div>
        </div>
        <div className="icon-outline">
          <div className="icons">
             <i className="skill-icon devicon-javascript-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>JavaScript</span>
          </div>
        </div>
        <div className="icon-outline">
          <div className="icons">
            <SiCplusplus style={{color: ''}}/>
            <span className='icon-name'>C++</span>
          </div>
        </div>
        <div className="icon-outline">
          <div className="icons">
            <i className="skill-icon devicon-csharp-plain" aria-hidden="true"></i>
            <span className='icon-name'>C#</span>
          </div>
        </div>
      </div>

    <br /> <br /> <br />


      {/* Second target */}
      <div className="programming-languages">Frameworks</div> 

      <div className="icons-container">
        {/* ... (Your Framework Icons) ... */}
        <div className="icon-outline">
          <div className="icons">
            <i className="skill-icon devicon-tomcat-line colored" aria-hidden="true"></i>
            <span className='icon-name'>Java Servlet</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i className="devicon-spring-plain" aria-hidden="true" style={{color: 'green'}}></i>
            <span className='icon-name'>SpringBoot</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i className="devicon-flask-original" aria-hidden="true"></i>
            <span className='icon-name'>Flask</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i className="skill-icon devicon-java-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Jakarta EE</span>
          </div>
        </div>


        <div className="icon-outline">
          <div className="icons">
            <i className="skill-icon devicon-hibernate-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Hibernate</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i className="skill-icon devicon-react-original colored" aria-hidden="true"></i>
            <span className='icon-name'>React</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-dot-net-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>APS.NET</span>
          </div>
        </div>

      </div>

 <br /> <br /> <br />
       <div className="programming-languages">Databases</div> 

      <div className="icons-container">
        {/* ... (Your Framework Icons) ... */}
        <div className="icon-outline">
          <div className="icons">
           <i class="skill-icon devicon-mysql-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>MySQL</span>
          </div>
        </div>


        <div className="icon-outline">
          <div className="icons">
          <i class="skill-icon devicon-microsoftsqlserver-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>MSSQL</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
           <i class="skill-icon devicon-postgresql-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>PostgresSQL</span>
          </div>
        </div>


        <div className="icon-outline">
          <div className="icons">
            <i className="skill-icon devicon-sqlite-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>SQLLite</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-mongodb-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>MongoDB</span>
          </div>
        </div>
      </div>


      
 <br /> <br /> <br />
       <div className="programming-languages">Tools And Technologies</div> 

      <div className="icons-container">
        {/* ... (Your Framework Icons) ... */}
        <div className="icon-outline">
          <div className="icons">
           <i class="skill-icon devicon-vscode-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>VS Code</span>
          </div>
        </div>


        <div className="icon-outline">
          <div className="icons">
          <i class="skill-icon devicon-visualstudio-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Visual Studio</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
           <i class="skill-icon devicon-intellij-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Intellij Idea</span>
          </div>
        </div>


        <div className="icon-outline">
          <div className="icons">
            <i className="skill-icon devicon-pycharm-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>PyCharm Idea</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-androidstudio-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Android Studio</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-netbeans-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Netbeans</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-googlecolab-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Google Colab</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-git-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>GIT</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-github-original" aria-hidden="true"></i>
            <span className='icon-name'>GitHub</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-jupyter-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Jupyter Notebook</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-amazonwebservices-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>AWS</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-microsoftsqlserver-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>MSSQL Server Studio</span>
          </div>
        </div>


         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-docker-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Docker</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-rstudio-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>R Studio</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <FaMap  style={{color: '#deff0aff'}}/>
            <span className='icon-name'>QGIS</span>
          </div>
        </div>
      </div>


          
 <br /> <br /> <br />
       <div className="programming-languages">Automation Testings</div> 

      <div className="icons-container">
        {/* ... (Your Framework Icons) ... */}
        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-postman-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Postman</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-junit-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>Junit</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
           <FaCode  style={{color: '#00ff55ff'}}></FaCode>
            <span className='icon-name'>Mocktio</span>
          </div>
        </div>
    </div>  

             
 <br /> <br /> <br />
       <div className="programming-languages">AI / ML Skills</div> 

      <div className="icons-container">
       
        

         <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-junit-plain colored" aria-hidden="true"></i>
            <span className='icon-name'>XGBoost</span>
          </div>
        </div>

         <div className="icon-outline">
          <div className="icons">
           <i class="skill-icon fas fa-tree" aria-hidden="true" style={{color:'green' }}></i>
            <span className='icon-name'>Random Forest</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
          <i class="skill-icon devicon-python-plain colored" aria-hidden="true" ></i>
            <span className='icon-name'>Machine Learning</span>
          </div>
        </div>


        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon devicon-tensorflow-original colored" aria-hidden="true" ></i>
            <span className='icon-name'>Tensorflow</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons" >
            <SiPandas style={{color:'purple'}}/>
            <span className='icon-name'>Pandas</span>
          </div>
        </div>


        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon fas fa-project-diagram" aria-hidden="true" style={{color: 'red'}} ></i>
            <span className='icon-name'>Neural Networks</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon fas fa-layer-group" aria-hidden="true" style={{color: 'rgba(153,50,204)'}}></i>
            <span className='icon-name'>Convolutional Neural Networks</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon fas fa-palette" aria-hidden="true" style={{color: 'yellow'}} ></i>
            <span className='icon-name'>Image Pigmentaitons</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon fas fa-sliders-h" aria-hidden="true" style={{color: '#112cf6ff'}}></i>
            <span className='icon-name'>Hyper Parameter Tuning</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon fas fa-table" aria-hidden="true" style={{color: '#11ffa4ff'}} ></i>
            <span className='icon-name'>Pandas</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon fas fa-chart-line" aria-hidden="true"  style={{color: '#e80ec0ff'}}></i>
            <span className='icon-name'>Matplotlib</span>
          </div>
        </div>

        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon fas fa-robot" aria-hidden="true"  style={{color: '#da4343ff'}}></i>
            <span className='icon-name'>Scikitlearn</span>
          </div>
        </div>

    
        <div className="icon-outline">
          <div className="icons">
            <i class="skill-icon fas fa-user" aria-hidden="true" ></i>
            <span className='icon-name'>Face Recognition</span>
          </div>
        </div>
        </div>  
    </>
  );
}

export default Skills;