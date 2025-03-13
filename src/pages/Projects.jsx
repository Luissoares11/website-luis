import styles from '../styles/projects.module.css';
import cs from "../assets/cs.gif"

const projects = [
    {
        id: 1,
        gif: cs,
        title: 'Coming Soon',
        description: 'Coming Soon',
        category: 'In Development',
        github: 'https://github.com/Luissoares11'
    },
    {
        id: 2,
        gif: cs,
        title: 'Coming Soon',
        description: 'Coming Soon',
        category: 'In Development',
        github: 'https://github.com/Luissoares11'
    }
];

function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map(project => (
                    <a key={project.id} href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                        <img src={project.gif} alt={project.title} className={styles.projectGif} />
                        <div className={styles.projectOverlay}>
                            <div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </div>
                            <div>
                                <span className={styles.projectCategory}>{project.category}</span>
                            </div>                        
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;

// © 2025 Luis Soares. All rights reserved.
