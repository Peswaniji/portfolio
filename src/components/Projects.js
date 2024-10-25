import React from 'react';

const Projects = () => {
    return (
        <section>
            <h1>Projects</h1>
            <div className="project">
                <h3>Portfolio Website</h3>
                <p>Developed using React, this portfolio showcases my skills, projects, and contact information.</p>
                <a href="https://github.com/your-username/portfolio" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <div className="project">
                <h3>Todo App</h3>
                <p>A simple todo app built with React and MongoDB, allowing users to add, edit, and delete tasks.</p>
                <a href="https://github.com/your-username/todo-app" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
        </section>
    );
};

export default Projects;
