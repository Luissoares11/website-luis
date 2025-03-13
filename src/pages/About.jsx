import styles from "../styles/about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLaptopCode, faLightbulb, faMusic } from "@fortawesome/free-solid-svg-icons";
import about from "../assets/about.jpg"

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textabout}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.paragraph}>
          Hi, I'm Luis Soares, an undergraduate student in Engineering Physics.
          Despite this unorthodox path, I aspire to become a Software Engineer.
        </p>

        <div className={styles.infoGrid}>
          {[
            { icon: faGraduationCap, title: "Background", text: "Involved in engineering, physics, and software development, currently pursuing a degree." },
            { icon: faLaptopCode, title: "Skills", text: "React, JavaScript, Python, Git, C, and more." },
            { icon: faLightbulb, title: "Interests", text: "Tech, hardware and software, Sports." },
            { icon: faMusic, title: "Hobbies", text: "Football, competitive gaming, homelab enthusiast." }
          ].map((item, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.boxHeader}>
                <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <img src={about} alt="Luis Soares" className={styles.profileImage} />
    </div>
  );
}

export default About;

// © 2025 Luis Soares. All rights reserved.