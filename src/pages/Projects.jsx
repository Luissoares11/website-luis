import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/projects.module.css';
import cs from "../assets/cs.gif"
import website from "../assets/gif.gif"
import jarvis from "../assets/jarvis.gif"
const projects = [
    {
        id: 1,
        gif: jarvis,
        title: "Jarvis AI",
        description: "Modular AI assistant with memory, tools, APIs, and automation.",
        category: "AI / Backend",
        readmeUrl: "https://raw.githubusercontent.com/Luissoares11/jarvis/main/README.md"
    },
    {
        id: 2,
        gif: website,
        title: "Personal Portfolio",
        description: "React portfolio website deployed with GitHub Pages.",
        category: "Frontend",
        readmeUrl: "https://raw.githubusercontent.com/Luissoares11/website-luis/main/README.md"
    },
    {
        id: 3,
        gif: cs,
        title: 'Coming Soon',
        description: 'Coming Soon',
        category: 'In Development',
    }
];

function Modal({ project, readmeContent, loading, onClose }) {
    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h3 className={styles.modalTitle}>{project.title}</h3>
                    <button className={styles.modalClose} onClick={onClose}>✕</button>
                </div>
                <div className={styles.modalBody}>
                    {loading
                        ? <p className={styles.modalLoading}>Loading README...</p>
                        : <pre className={styles.readmeContent}>{readmeContent}</pre>
                    }
                </div>
            </div>
        </div>,
        document.body
    );
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [readmeContent, setReadmeContent] = useState('');
    const [loading, setLoading] = useState(false);

    const openModal = async (project) => {
        setSelectedProject(project);
        if (!project.readmeUrl) {
            setReadmeContent('No README available yet.');
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(project.readmeUrl);
            const text = await res.text();
            setReadmeContent(text);
        } catch {
            setReadmeContent('Failed to load README.');
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setSelectedProject(null);
        setReadmeContent('');
    };

    return (
        <div className={styles.projectsContainer}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map(project => (
                    <div
                        key={project.id}
                        className={styles.projectCard}
                        onClick={() => openModal(project)}
                        style={{ cursor: 'pointer' }}
                    >
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
                    </div>
                ))}
            </div>

            {selectedProject && (
                <Modal
                    project={selectedProject}
                    readmeContent={readmeContent}
                    loading={loading}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default Projects;

// © 2025 Luis Soares. All rights reserved.