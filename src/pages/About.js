import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

function About() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // duration of the animation
      });
    }, []);
    const [activeTab, setActiveTab] = useState('work'); // Default active tab
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return (
      <>
        <section data-aos="fade-up" className="about" id="about">
            <h2 className="section-title">About Me</h2>
            <span className="section-subtitle">My introduction</span>

            <div class="profile-container">
                <img src='/profile_image.jpg'
                style={{
                    width: 400, // Adjust the size as needed
                    height: 400,
                    float: 'right', 
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: '50%', // This makes it a circle
                    objectFit: 'cover', // Ensures the image fills the container without distortion
                }}
                />
                <div className="profile-text">
                    <p className="profile-description">
                    As a dedicated software engineer with a strong foundation in both frontend and backend development, 
                    I bring a passion for solving complex problems through innovative software solutions. With expertise in frameworks such as Angular, React, 
                    and Flask, I have contributed to a range of projects from secure ad targeting systems to mobile app development using React Native. 
                    My skills in integrating databases, optimizing application performance, and enhancing security measures such as encryption and 2FA demonstrate my commitment to building scalable, secure, and user-friendly applications. 
                    I thrive in collaborative environments and am always eager to apply my knowledge in cutting-edge technologies to drive impactful results.
                    </p>
                    <div className="btn-container">
                    <button
                        class="btn"
                        onClick={() => window.open('./myResume.pdf')}
                    >
                        Download CV
                    </button>
                    <button class="btn">
                        Contact Info
                    </button>
                    </div>
                </div>
            </div>
        </section>

        <section data-aos="fade-up" className = "qualification">
          <h2 class="section-title">Qualification</h2>
          <span className="section-subtitle">My journey</span>

          <div className="qualification-container container">
            <div className="qualification-tabs">
                <div
                    className={`qualification-button button-flex ${activeTab === 'education' ? 'qualification-active' : ''}`}
                    onClick={() => handleTabClick('education')}
                    data-target="#education"
                >
                    <i className="fas fa-graduation-cap qualification-icon"></i>
                    Education
                </div>
                <div
                    className={`qualification-button button-flex ${activeTab === 'work' ? 'qualification-active' : ''}`}
                    onClick={() => handleTabClick('work')}
                    data-target="#work"
                >
                    <i className="fas fa-briefcase qualification-icon"></i>
                    Work
                </div>
            </div>
            <div className="qualification-sections">
                {/* QUALIFICATION CONTENT 1 */}
                <div className={`qualification-content ${activeTab === 'education' ? 'qualification-active' : ''}`} data-content id="education">
                    {/* Qualification Data for Education */}
                    <div className="qualification-data">
                        <div className="qualification-data-pcs">
                            <h3 className="qualification-title">Student</h3>
                            <span className="qualification-subtitle">
                                <a href="https://hsgs.edu.vn/en" target="_blank" rel="noopener noreferrer">
                                    HUS High School for Gifted Student
                                </a>
                            </span>
                            <div className="qualification-calendar">
                                <i className="fa-regular fa-calendar-days"></i>
                                2019 - 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>
                    <div className="qualification-data">
                        <div></div>
                        <div>
                            <span className="qualification-rounder"></span>
                        </div>
                        <div className="qualification-data-pcs">
                            <h3 className="qualification-title">Bachelor of Information Engineering and Media</h3>
                            <span className="qualification-subtitle">
                                <a href="https://www.ntu.edu.sg" target="_blank" rel="noopener noreferrer">
                                    Nanyang Technological University
                                </a>
                            </span>
                            <div className="qualification-calendar">
                                <i className="fas fa-calendar-alt"></i>
                                2022 - 2026
                            </div>
                        </div>
                    </div>
                </div>

                {/* QUALIFICATION CONTENT 2 */}
                <div className={`qualification-content ${activeTab === 'work' ? 'qualification-active' : ''}`} data-content id="work">
                    {/* Qualification Data for Work */}
                    <div className="qualification-data">
                        <div className="qualification-data-pcs">
                            <h3 className="qualification-title">Software Engineer Intern</h3>
                            <span className="qualification-subtitle">
                                <a href="https://vebits.com/" target="_blank" rel="noopener noreferrer">Vebits AI</a>
                            </span>
                            <div className="qualification-calendar">
                                <i className="fas fa-calendar-alt"></i>
                                May 2024 - Aug 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>
                    <div className="qualification-data">
                        <div></div>
                        <div>
                            <span className="qualification-rounder"></span>
                        </div>
                        <div className="qualification-data-pcs">
                            <h3 className="qualification-title">Software Engineer Intern</h3>
                            <span className="qualification-subtitle">
                                <a href="" target="_blank" rel="noopener noreferrer">Zeira</a>
                            </span>
                            <div className="qualification-calendar">
                                <i className="fas fa-calendar-alt"></i>
                                Oct 2024 - Dec 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

      </>
    );
  }
  

export default About;