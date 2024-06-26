import React, { useEffect, useRef, useState } from 'react';
import Hero from '../../components/Hero/Hero'
import styles from "./MainPage.module.css"
import { Link } from 'react-router-dom'


const MainPage = ({ setModalActive, setModalContent, setModalActive2, setModalContent2  }) => {

  const mapContainer = useRef(null);

  useEffect(() => {
    let myMap = null;

    if (window.ymaps) {
      window.ymaps.ready(async () => {
        const start = 'Ульяновск';
        const end = 'Центральная улица, 31, село Ивановка, Зеленорощинское сельское поселение, Ульяновский район';
  

        const route = await window.ymaps.route([start, end]);
  

        const startCoords = route.getWayPoints().get(0).geometry.getCoordinates();
        const endCoords = route.getWayPoints().get(1).geometry.getCoordinates();
  

        const centerCoords = [(startCoords[0] + endCoords[0]) / 2, (startCoords[1] + endCoords[1]) / 2];
  
        myMap = new window.ymaps.Map(mapContainer.current, {
          center: centerCoords,
          zoom: 11,
          
        }, 
        {suppressMapOpenBlock: true}
        );
        
  

        const myPlacemark = new window.ymaps.Placemark([54.194375, 48.099989], {
          iconCaption: 'Родник'
        }, {
          preset: 'islands#greenDotIconWithCaption'
        });
        myMap.geoObjects.add(myPlacemark);
  

        route.getPaths().options.set({

          strokeColor: '#7fd135',

          strokeWidth: 5
        });
        myMap.geoObjects.add(route);
      });
    }

    return () => {
      if (myMap) {
        myMap.destroy();
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero title={<span>РОДНИК <br/> РОДИТЕЛЬСКИЙ</span>}/>
      <div className="block" id={styles.margin}>
        <div className={styles.img}>
          <img src="./img/About.png" alt="About-Spring" />
        </div>
        <div className={styles.containerAbout}>
          <h2 className={styles.heading}>О роднике</h2>
          <div className={styles.containerText}>
            <p className={styles.text}>Родник “Родительский” в селе Ивановка — это уникальное природное место, расположенное <br/>всего в 30 км от города Ульяновск. Он является одним из многочисленных источников питания<br/> реки Свияга, которая играет важную роль в экосистеме региона.</p>
            <p className={styles.text}>Родник находится на склоне небольшой горы, что создает особую атмосферу умиротворения и спокойствия. Здесь можно не только насладиться красотой природы, но и набрать чистейшую воду, температура которой круглый год составляет 4 градуса.</p>
            <p className={styles.text}>Родник  — это не просто источник чистой воды,<br/> это место, где сочетаются природа, история и культура региона.</p>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container">
          <h2>Как добраться</h2>
          <div className={styles.containerMap}>
            <div ref={mapContainer} style={{width: '800px', height: '600px'}} className={styles.map}></div>
            <div className={styles.instruct}>
              <p className={styles.text} id={styles.textMB}>Для того чтобы добраться до родника, вы можете<br/> следовать нашей инструкции и использовать<br/> карту, или же получить более подробную<br/> информацию, нажав на кнопку ниже.</p>
              <p className={styles.text}>Как добраться до родника:
                <ol className={styles.text} id={styles.lists}>
                  <li>Начните свою дорогу из Ульяновска.</li>
                  <li>Двигайтесь в направлении села Ивановка.</li>
                  <li>Прибыть на улицу Центральная, 31 в селе<br/> Ивановка.</li>
                  <li>По данному адресу будет стоять указатель на<br/> родник.</li>
                  <li>Пройдите 200 метров по указателю.</li>
                  <li>Вы прибудете к роднику.</li>
                </ol>
              </p>
              <div>
                <Link to='/map' className={styles.link}>Узнать подробнее</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block" id={styles.marginB}>
        <div className={styles.containerVisitors}>
          <h2>Посетителям</h2>
          <div className={styles.box}> 
            <div className={styles.bath}>
              <img className={styles.pointer} onClick={() => {
            setModalActive(true); setModalContent('bath')}} src="./img/bath.png" alt="Купель" />
              <h4 className={styles.title}>КУПЕЛЬ</h4>
              <p className={styles.text}>Искупайтесь в купели, расположенной прямо на территории родника. Это уникальная возможность ощутить на себе целебные свойства воды.</p>
            </div>
            <div className={styles.water}>
              <img className={styles.pointer} onClick={() => {
              setModalActive(true); setModalContent('water');}} src="./img/water.png" alt="Вода" />
              <h4 className={styles.title}>ВОДА</h4>
              <p className={styles.text}>Вода из нашего родника не просто чиста, она обладает целебными свойствами. Приходите и убедитесь в этом сами.</p>
            </div>
            <div className={styles.house}>
              <img className={styles.pointer} onClick={() => {
              setModalActive(true); setModalContent('house');}} src="./img/house.png" alt="Детский дом" />
              <h4 className={styles.title}>ДЕТСКИЙ ДОМ</h4>
              <p className={styles.text}>Рядом с родником расположен детский дом имени А.М. Матросова. Посетите и узнайте больше о его истории и значении.</p>
            </div>
            <div className={styles.rules}>
              <div onClick={() => {
              setModalActive(true); setModalContent('rules');}} className={`${styles.imgRules} ${styles.pointer}`}>
                <h4 className={styles.titleRules}>ВАЖНАЯ ИНФОРМАЦИЯ</h4>
              </div>
              <h4 className={styles.title}>ПРАВИЛА ПОСЕЩЕНИЯ</h4>
              <p className={styles.text}>Перед посещением родника, пожалуйста, ознакомьтесь с правилами. Мы хотим, чтобы ваше пребывание было приятным и безопасным.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className={styles.containerNews}>
          <div className={styles.topContent}>
            <h2>Новости</h2>
            <Link to='/news' className={styles.link2}>Больше новостей</Link>
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
          </div>
        </div>
      </div>
      <div className="block" id={styles.marginT}>
        <div className={styles.containerMedia}>
          <div className={styles.topContent}>
            <h2>Фото</h2>
            <Link to='/media' className={styles.link2}>Смотреть ещё</Link>
          </div>
          <div className={styles.boxPhoto}>
            <img src="./img/road.png" alt="Подход к роднику" />
            <img src="./img/mainBridge.png" alt="Мост через родник" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
