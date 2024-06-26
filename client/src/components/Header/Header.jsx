import React from 'react';
import { Link } from "react-router-dom"
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className="block">
          <div className={styles.container}>
            <div className={styles.logo}>
              <Link to="/">
                <img src='img/logo.png'></img>
              </Link>
            </div>
            <nav className={styles.navContainer}>
              <ul className={styles.nav}>
                <li><Link className={styles.link} to="/news">Новости</Link></li>
                <li><Link className={styles.link} to="/media">Медиа</Link></li>
                <li><Link className={styles.link} to="/map">Как добраться</Link></li>
                <li><Link className={styles.link} to="/contacts">Контакты</Link></li>
                <li><Link className={styles.link} to="/support">Поддержать</Link></li>
              </ul>
            </nav>
          </div>
      </div>
    </header>
  );
}

export default Header;
