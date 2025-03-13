import { useNavigate } from 'react-router-dom';
import styles from '../styles/home.module.css';
import cmhome from "../assets/cmhome.gif";
import down from "../assets/down.gif";
import LuisSoaresCV from "../assets/LuisSoaresCV.pdf";

const boxes = [
    {
        id: 1,
        gif: cmhome,
        title: 'Coming Soon',
        description: 'Coming Soon',
        category: 'In Development',
        github: 'https://github.com/Luissoares11'
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

function Home() {
    const navigate = useNavigate();

    const handleClick = (box) => {
        if (box.curriculum) {
            const link = document.createElement('a');
            link.href = box.curriculum;
            link.download = "LuisSoaresCV";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            navigate('/experience');
        } else {
            window.open(box.github, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <div className={styles.container}>
          <div className={styles.textHome}>
            <h2 className={styles.title}>Welcome!</h2>
            <p className={styles.paragraph}>
              Hi, I'm Luis Soares, and this is my portfolio showcasing my work and career journey.
              Feel free to explore, and don’t hesitate to reach out if my skills align with your needs!
            </p>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.aboutBtn} onClick = {() => navigate("/About")}>
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
                          <div>
                              <span className={styles.boxCategory}>{box.category}</span>
                          </div>                        
                      </div>
                  </div>
              ))}
          </div>
        </div>
    );
}

export default Home;

// © 2025 Luis Soares. All rights reserved.
