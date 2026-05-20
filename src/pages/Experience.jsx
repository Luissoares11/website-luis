import styles from '../styles/experience.module.css';

function Experience() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <p className={styles.paragraf}>Here, you can explore my journey—from my school years to the present.</p>

            <div className={styles.timeline}>

                <div className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                        <span className={styles.timelinePeriod}>2026 — Present</span>
                        <h3 className={styles.timelineTitle}>University</h3>
                        <h4 className={styles.timelineSub}>Universidade do Porto & Universidade de Aveiro — Physics Engineering</h4>

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>Core Studies</p>
                            <p className={styles.sectionText}>Fundamentals of engineering and physics.</p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>Programming & Technologies</p>
                            <ul className={styles.list}>
                                <li>Advanced skills in Python, C, React Native, SQL, and MATLAB.</li>
                                <li>Developed projects in C++.</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>Personal AI Assistant <span className={styles.tech}>(Python, FastAPI, SQLite)</span></p>
                            <ul className={styles.list}>
                                <li>Implemented persistent memory — facts, collections, and aliases.</li>
                                <li>Designed intent parsing using LLMs (Claude Haiku) with a local pattern cache for faster responses.</li>
                                <li>Integrated a computation engine using SymPy for symbolic mathematics.</li>
                                <li>Connected real-time external data sources (weather, football).</li>
                                <li>Developed an action system for to-dos, reminders, timers, and Google Calendar sync.</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>Homelab & Systems</p>
                            <ul className={styles.list}>
                                <li>Started my homelab journey for self-hosting and cloud services.</li>
                                <li>Fully switched to Linux (Ubuntu).</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>Key Takeaways</p>
                            <ul className={styles.list}>
                                <li>Developed a strong engineering mindset.</li>
                                <li>Sharpened coding skills through hands-on projects.</li>
                                <li>Expanded my technology repertoire significantly.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                        <span className={styles.timelinePeriod}>Until 2023</span>
                        <h3 className={styles.timelineTitle}>School</h3>

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>Core Studies</p>
                            <p className={styles.sectionText}>Technology and Science.</p>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>Key Learnings</p>
                            <ul className={styles.list}>
                                <li>Began exploring coding, teaching myself JavaScript, HTML, and CSS.</li>
                                <li>Took my first Python course during this period.</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>Systems</p>
                            <ul className={styles.list}>
                                <li>Assembled my first desktop PC, primarily for gaming and schoolwork.</li>
                                <li>Installed Linux on a partition and began experimenting with it.</li>
                            </ul>
                        </div>

                        <div className={styles.section}>
                            <p className={styles.sectionTitle}>Key Takeaways</p>
                            <ul className={styles.list}>
                                <li>Developed a passion for technology.</li>
                                <li>Laid the foundation for my future aspirations.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experience;

// © 2025 Luis Soares. All rights reserved.