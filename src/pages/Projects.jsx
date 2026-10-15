import { useState } from 'react';
import { createPortal } from 'react-dom';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from '../styles/projects.module.css';
import cs from "../assets/cs.gif"
import website from "../assets/gif.gif"
import jarvis from "../assets/jarvis.gif"
const projects = [
    {
        id: 1,
        gif: jarvis,
        title: "EDITH",
        description: "Rebuilt from scratch after Jarvis, my first personal AI: a core for intent parsing, memory, and routing, with separate services for each feature.",
        category: "AI / Backend",
        readmeUrl: "https://raw.githubusercontent.com/Luissoares11/EDITH/main/README.md"
    },
    {
        id: 2,
        gif: jarvis,
        title: "Fit-app",
        description: "Tracks weekly weight and body photos with a weight chart, goal progress, BMI, and before and after comparison. Gym section with weekly plan, exercises by muscle group, and personal records per exercise.",
        category: "Fullstack",
        readmeUrl: "https://raw.githubusercontent.com/Luissoares11/fit-app/main/README.md"
    },
    {
        id: 3,
        gif: website,
        title: "Calendar",
        description: "A self-hosted, AI-integrated calendar system that lets you manage events through chat with EDITH. It includes an iPhone React PWA over Tailscale and an automated service for real-time push notifications.",
        category: "Fullstack",
        readmeUrl: "https://raw.githubusercontent.com/Luissoares11/calendar-app/main/README.md"
    },
    {
        id: 4,
        gif: website,
        title: "Personal Portfolio",
        description: "React portfolio website deployed with GitHub Pages.",
        category: "Frontend",
        readmeUrl: "https://raw.githubusercontent.com/Luissoares11/website-luis/main/README.md"
    },
    {
        id: 5,
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
                        : <div className={styles.readmeContent}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>
                            </div>
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