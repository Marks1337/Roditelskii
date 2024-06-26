import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Hero.module.css"

const Hero = ({ title, externalLink }) => {

  return (
    <div className={styles.background} style={{ backgroundImage: `url("img/background 2.JPG")` }}>
      <div className="block">
        <div className={styles.box}>
          <h1>{title}</h1>
          <div className={styles.boxBtn}>{externalLink && <Link className={styles.supportBtn} to={externalLink} target="_blank" rel="noopener noreferrer">Поддержать проект</Link>}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;