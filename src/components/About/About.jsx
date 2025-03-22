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
}

const About = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "Portfolio Website",
            shortDescription: "Personal portfolio built with React",
            longDescription: "A modern, responsive portfolio website built using React and TypeScript. Features include dynamic routing, animated components, and responsive design.",
            technologies: ["React", "TypeScript", "CSS"],
            image: "/portfolio-preview.png",
            githubLink: "https://github.com/yourusername/portfolio"
        },
        // Add more projects here
    ];

    return (
        <div className="about-container">
            <div className="about-title">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .start()
                            .typeString("about_me();")
                            .pauseFor(1000)
                    }}
                />
            </div>
            <div className="about-content">
                <p className="about-text">
                    I'm a full-stack software engineer with a passion for creating beautiful,
                    functional, and user-friendly applications. With expertise in both frontend
                    and backend development, I enjoy bringing ideas to life through code.
                </p>
                <div className="skills-section">
                    <h3>Technologies I work with:</h3>
                    <div className="skills-grid">
                        <div className="skill-item">JavaScript/TypeScript</div>
                        <div className="skill-item">React</div>
                        <div className="skill-item">Node.js</div>
                        <div className="skill-item">Python</div>
                        <div className="skill-item">SQL</div>
                        <div className="skill-item">AWS</div>
                    </div>
                </div>
                
                <div className="projects-section">
                    <h3>Featured Projects</h3>
                    <div className="projects-grid">
                        {projects.map(project => (
                            <div 
                                key={project.id}
                                className="project-item"
                                onClick={() => setSelectedProject(project)}
                            >
                                <h4>{project.title}</h4>
                                <p>{project.shortDescription}</p>
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
                        <h2>{selectedProject.title}</h2>
                        <img 
                            src={selectedProject.image} 
                            alt={selectedProject.title}
                            className="project-image"
                        />
                        <p className="project-description">
                            {selectedProject.longDescription}
                        </p>
                        <div className="project-technologies">
                            {selectedProject.technologies.map(tech => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {selectedProject.liveLink && (
                                <a 
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    Live Demo
                                </a>
                            )}
                            {selectedProject.githubLink && (
                                <a 
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;