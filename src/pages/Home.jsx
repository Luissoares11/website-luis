import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/home.module.css';
import cmhome from "../assets/cmhome.gif";
import down from "../assets/down.gif";
import jarvis from "../assets/jarvis.gif";
import LuisSoaresCV from "../assets/LuisSoaresCV.pdf";

const boxes = [
    {
        id: 1,
        gif: jarvis,
        title: "Jarvis AI",
        description: "Modular AI assistant with memory, tools, APIs, and automation.",
        category: "AI / Backend",
        readmeUrl: "https://raw.githubusercontent.com/Luissoares11/AI-ASSISTANT/main/README.md"
    },
    {
        id: 2,
        gif: down,
        title: 'Curriculum',
        description: 'Download CV',
        category: 'Download',
        curriculum: LuisSoaresCV
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

function Home() {
    const navigate = useNavigate();
    const [selectedBox, setSelectedBox] = useState(null);
    const [readmeContent, setReadmeContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleClick = async (box) => {
        if (box.curriculum) {
            const link = document.createElement('a');
            link.href = box.curriculum;
            link.download = "LuisSoaresCV";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (box.readmeUrl) {
            setSelectedBox(box);
            setLoading(true);
            try {
                const res = await fetch(box.readmeUrl);
                const text = await res.text();
                setReadmeContent(text);
            } catch {
                setReadmeContent('Failed to load README.');
            } finally {
                setLoading(false);
            }
        }
    };

    const closeModal = () => {
        setSelectedBox(null);
        setReadmeContent('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.textHome}>
                <h2 className={styles.title}>Welcome!</h2>
                <p className={styles.paragraph}>
                    Hi, I'm Luis Soares, and this is my portfolio showcasing my work and career journey.
                    Feel free to explore, and don't hesitate to reach out if my skills align with your needs!
                </p>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.aboutBtn} onClick={() => navigate("/About")}>
                    About
                </button>
            </div>
            <div className={styles.homeBox}>
                {boxes.map((box) => (
                    <div
                        key={box.id}
                        className={styles.boxCard}
                        onClick={() => handleClick(box)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={box.gif} alt={box.title} className={styles.boxGif} />
                        <div className={styles.boxOverlay}>
                            <div>
                                <h3 className={styles.boxTitle}>{box.title}</h3>
                                <p className={styles.boxDescription}>{box.description}</p>
                            </div>
                            <span className={`${styles.boxCategory} ${box.id === 1 ? styles.devCategory : styles.downloadCategory}`}>
                                {box.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedBox && (
                <Modal
                    project={selectedBox}
                    readmeContent={readmeContent}
                    loading={loading}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default Home;

// © 2025 Luis Soares. All rights reserved.