import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FolderOpenDot, House, User, GraduationCap } from "lucide-react";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/header.module.css";
import fifa from '../assets/fifa.png';

function Header() {
    return (
        <header id="sidebar" className={styles.sidebar}>
            <Link to="/" className={styles.phome}>
                <div className={styles.profile}>
                    <img src={fifa} alt="Profile" />
                    <div className={styles.text}>
                        <h1>Luis Soares</h1>
                        <p>Engineering Student</p>
                    </div>   
                </div>
            </Link>
            <nav>
                <ul className={styles.ul1}>
                    <li><Link to="/"><House size={20}/> Home</Link></li>
                    <li><Link to="/projects"><FolderOpenDot size={20} /> Projects</Link></li>
                    <li><Link to="/experience"><GraduationCap size={20} /> Experience</Link></li>
                    <li><Link to="/about"><User size={20}/> About Me</Link></li>
                </ul>
            </nav>
            <nav>
                <ul className={styles.ul2}>
                    <li><a href="https://github.com/Luissoares11" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://x.com/Licah_11" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/in/luis-soares-522b7727a/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </nav>    
        </header>
    );
}

export default Header;

/* © 2025 Luis Soares. All rights reserved. */
