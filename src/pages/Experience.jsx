import styles from '../styles/experience.module.css';

function Experience() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <p className={styles.paragraf}>Here, you can explore my journey—from my school years to the present.</p>
            
            <div className={styles.phase}>
                <h3 className={styles.time}>University (2025 - Present)</h3>
                <div className={styles.description}>
                    <h4 className={styles.uni}>Universidade do Porto and Universidade de Aveiro – Physics Engineering</h4>

                    <ul className={styles.list}>
                        <li><span className={styles.bold}>Core Studies:</span> Fundamentals of engineering and physics.</li>
                        <li>
                            <span className={styles.bold}>Programming & Technologies:</span>
                            <ul className={styles.sublist}>
                                <li>Advanced skills in Python, C, React Native, SQL, and MATLAB.</li>
                                <li>Developed some projects in C++.</li>
                            </ul>
                        </li>
                        <li>
                            <span className={styles.bold}>Homelab & Systems:</span>
                            <ul className={styles.sublist}>
                                <li>Started my homelab journey for self-hosting and cloud services.</li>
                                <li>Fully switched to Linux (Ubuntu).</li>
                            </ul>
                        </li>
                        <li>
                            <span className={styles.bold}>Key Takeaways:</span>
                            <ul className={styles.sublist}>
                                <li>Developed a strong engineering mindset.</li>
                                <li>Sharpened my coding skills through hands-on projects.</li>
                                <li>Added more technologies to my repertoire.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.phase}>
                <h3 className={styles.time}>School (Until 2023)</h3>
                <div className={styles.description}>
                    <ul className={styles.list}>
                        <li><span className={styles.bold}>Core Studies:</span> Technology and Science.</li>
                        <li>
                            <span className={styles.bold}>Key Learnings:</span>
                            <ul className={styles.sublist}>
                                <li>Began exploring coding, teaching myself JavaScript, HTML, and CSS.</li>
                                <li>During this time, I took my first course in Python.</li>
                            </ul>
                        </li>
                        <li>
                            <span className={styles.bold}>Systems:</span>
                            <ul className={styles.sublist}>
                                <li>Assembled my first desktop PC, primarily for gaming and schoolwork.</li>
                                <li>Installed Linux on a partition and began experimenting with it.</li>
                            </ul>
                        </li>
                        <li>
                            <span className={styles.bold}>Key Takeaways:</span>
                            <ul className={styles.sublist}>
                                <li>Developed a passion for technology.</li>
                                <li>Laid the foundation for my future aspirations.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
