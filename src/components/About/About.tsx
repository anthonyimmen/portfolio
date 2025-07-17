import React, { useState } from 'react';
import './About.css';
import Typewriter from "typewriter-effect";

interface Project {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    technologies: string[];
    image: string;
    liveLink?: string;
    githubLink?: string;
    websiteLink?: string;
    demoVideo?: string;
}

interface Skill {
    name: string;
    icon: string;
}

const About = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showVideoDemo, setShowVideoDemo] = useState(false);

    const projects: Project[] = [
        {
            id: 1,
            title: "goal.",
            shortDescription: "Goal is a productivity app that is meant to improve your day-to-day life and help you reach your goals.",
            longDescription: "Goal enables users to intentionally create to-do lists limited to their most important daily task. Includes a custom authentication service, profile page, a motivational quote display, a list of completed goals, and a GitHub-like daily tracker.",
            technologies: ["React Native", "TypeScript", "Express.js", "AWS", "SQL", "MongoDB", "CSS", "Figma", "UI/UX"],
            image: "/goal-icon.png",
            demoVideo: "/goal_demo.mp4",
            liveLink: "https://www.goalapp.io",
            websiteLink: "https://www.goalapp.io"
        },
        {
            id: 2,
            title: "Portfolio",
            shortDescription: "My personal portfolio built with React.",
            longDescription: "A modern, responsive portfolio website built using React and Javascript. Features include Google Gemini integration with memory, dynamic routing, analytics, animated components, and responsive design.",
            technologies: ["React", "TypeScript", "CSS", "Vercel", "Figma"],
            image: "/portfolio-icon.png",
            githubLink: "https://github.com/anthonyimmen/portfolio",
            websiteLink: "https://www.anthonyimmenschuh.com"
        },
        {
            id: 3,
            title: "Airbnb Clone",
            shortDescription: "A clone of the Airbnb application.",
            longDescription: "A modern, responsive portfolio website built using React and Javascript. Features include dynamic routing, animated components, and responsive design.",
            technologies: ["React Native", "TypeScript", "CSS"],
            demoVideo: "/airbnb_demo.mp4",
            image: "/airbnb-logo.png",
            githubLink: "https://github.com/anthonyimmen/airbnb-clone"
        },
        // Add more projects here
    ];

    const skills: Skill[] = [
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'React / React Native', icon: 'devicon-react-original' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain-wordmark' },
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'Spring', icon: 'devicon-spring-original-wordmark' },
        { name: 'C++', icon: 'devicon-cplusplus-plain' },
        { name: 'C', icon: 'devicon-c-plain' },
        { name: 'Figma', icon: 'devicon-figma-plain' }
    ];

    const handleLiveDemoClick = (e: React.MouseEvent, project: Project) => {
        e.preventDefault();
        if (project.demoVideo) {
            setShowVideoDemo(true);
        } else {
            window.open(project.liveLink, '_blank');
        }
    };

    return (
        <div className="about-container">
            <div className="about-title">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .start()
                            .typeString("about")
                            .pauseFor(1000)
                    }}
                />
            </div>
            <div className="about-content">
                <p className="about-text">
                    Currently @ JPMChase. Experienced in frontend, backend, & UI/UX development. 
                    Building things...
                </p>
                 <div className="projects-section">
                    <h2>
                        projects
                    </h2>
                    <div className="projects-grid">
                        {projects.map(project => (
                            <div 
                                key={project.id}
                                className="project-item"
                                onClick={() => setSelectedProject(project)}
                            >   
                                <div className='project-title-and-image'>
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="project-image-preview"
                                    />
                                    <h4>{project.title}</h4>
                                </div>
                                <p>{project.shortDescription}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skills-section">
                    <h2>
                        tech
                    </h2>
                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div key={skill.name} className="skill-item">
                                <div className="skill-content">
                                    <i className={skill.icon}/>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Overlay */}
            {selectedProject && (
                <div className="project-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="project-modal" onClick={e => e.stopPropagation()}>
                        <button 
                            className="close-button"
                            onClick={() => setSelectedProject(null)}
                        >
                            ×
                        </button>
                        <div className="project-modal-title">
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title}
                                className="project-image"
                            />
                            <h1>{selectedProject.title}</h1>    
                        </div>              
                        <p className="project-description">
                            {selectedProject.longDescription}
                        </p>
                        <div className="project-technologies">
                            {selectedProject.technologies.map(tech => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {selectedProject.demoVideo && (
                                <button 
                                    onClick={(e) => handleLiveDemoClick(e, selectedProject)}
                                    className="project-link"
                                >
                                    Demo
                                </button>
                            )}
                            {selectedProject.githubLink && (
                                <a 
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    Github
                                </a>
                            )}
                            {selectedProject.websiteLink && (
                                <a 
                                    href={selectedProject.websiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    Website
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Add Video Demo Overlay */}
            {showVideoDemo && selectedProject?.demoVideo && (
                <div className="video-overlay" onClick={() => setShowVideoDemo(false)}>
                    <div className="video-modal" onClick={e => e.stopPropagation()}>
                        <button 
                            className="close-button"
                            onClick={() => setShowVideoDemo(false)}
                        >
                            ×
                        </button>
                        <video 
                            controls 
                            autoPlay 
                            className="demo-video"
                        >
                            <source src={selectedProject.demoVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;