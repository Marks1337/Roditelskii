import { React, useEffect } from 'react';
import Hero from '../../components/Hero/Hero'
import styles from './News.module.css'

const News = ({ setModalActive2, setModalContent2 }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero title={'НОВОСТИ'}/>
      <div className="block">
        <div className={styles.containerNews}>
          <div className={styles.topContent}>
            <h2>Новости</h2>
          </div>
          <div className={styles.contentNews}>
            <div className={styles.boxNews}>
              <img className={styles.pointer} onClick={() => {
              setModalActive2(true); setModalContent2('way');}} src="./img/way.png" alt="Подход к роднику" />
              <div className={styles.timeBox}>
                <time className={styles.time} datetime="2024-06-20">20.06.2024</time>
              </div>
              <h4 className={styles.headingNews}>Улучшение подхода к<br/>роднику</h4>
            </div>
            <div className={styles.boxNews}>
              <img className={styles.pointer} onClick={() => {
              setModalActive2(true); setModalContent2('bridge');}} src="./img/bridge.png" alt="Мост продолжение" />
              <div className={styles.timeBox}>
                <time className={styles.time} datetime="2024-06-08">08.06.2024</time>
              </div>
              <h4 className={styles.headingNews}>Строительство мостика<br/>
через родник</h4>
            </div>
            <div className={styles.boxNews}>
              <img className={styles.pointer} onClick={() => {
              setModalActive2(true); setModalContent2('startBridge');}} src="./img/startBridge.png" alt="Мост старт" />
              <div className={styles.timeBox}>
                <time className={styles.time} datetime="2024-05-20">20.05.2024</time>
              </div>
              <h4 className={styles.headingNews}>Начало строительства<br/> мостика через родник</h4>
            </div>
            <div className={styles.boxNews}>
              <img className={styles.pointer} onClick={() => {
              setModalActive2(true); setModalContent2('baptism');}} src="./img/baptism.png" alt="Крещение" />
              <div className={styles.timeBox}>
                <time className={styles.time} datetime="2024-01-19">19.01.2024</time>
              </div>
              <h4 className={styles.headingNews}>Священное Крещение</h4>
            </div>
            <div className={styles.boxNews}>
              <img className={styles.pointer} onClick={() => {
              setModalActive2(true); setModalContent2('consecration');}} src="./img/consecration.png" alt="Освящение" />
              <div className={styles.timeBox}>
                <time className={styles.time} datetime="2023-06-13">13.06.2023</time>
              </div>
              <h4 className={styles.headingNews}>Освящение Родника</h4>
            </div>
            <div className={styles.boxNews}>
              <img className={styles.pointer} onClick={() => {
              setModalActive2(true); setModalContent2('newHouse');}} src="./img/newHouse.png" alt="Новая купель" />
              <div className={styles.timeBox}>
                <time className={styles.time} datetime="2023-05-25">25.05.2023</time>
              </div>
              <h4 className={styles.headingNews}>Преображение Домика Купели</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
