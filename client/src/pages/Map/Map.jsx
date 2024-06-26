import React, { useEffect, useRef }from 'react';
import Hero from '../../components/Hero/Hero'
import styles from './Map.module.css'

const Map = () => {

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
      <Hero title={'КАК ДОБРАТЬСЯ'}/>
      <div className="block">
        <div ref={mapContainer} style={{width: '1400px', height: '704px'}} className={styles.map}></div>
      </div>
      <div className="block">
        <div className={styles.container}>
          <div className={styles.carInstruct}>
            <h3>На личном автомобиле</h3>
            <ol className={styles.text}>
              <li>Начните свое путешествие из Ульяновска, двигаясь<br/> в сторону села Ивановка.</li>
              <li>Когда доберетесь до села Ивановка, двигайтесь<br/> к улице “Центральная” до дома №31.</li>
              <li>У дома №31 на улице “Центральная” вы увидите<br/> указатель(указан на фото ниже), ведущий к роднику.</li>
              <li>Следуйте этому указателю до координат<br/> 
54.194375, 48.099989 - здесь расположен родник.</li>
            </ol>
            <p className={styles.text2}>Время в пути составляет от 40 минут до 1 часа.</p>
          </div>
          <div className={styles.busInstruct}>
            <h3>На общественном транспорте (автобус)</h3>
            <ol className={styles.text}>
              <li>В Ульяновске садитесь на автобус №127 или №129.<br/> Проезд стоит 30-70 рублей.</li>
              <li>Доехав до села Ивановка, от остановки двигайтесь<br/> к улице “Центральная” до дома №31.</li>
              <li>У дома №31 на улице “Центральная” вы увидите<br/> указатель(указан на фото ниже), ведущий к роднику.</li>
              <li>Следуйте этому указателю до координат<br/> 
              54.194375, 48.099989 - здесь расположен родник.</li>
            </ol>
            <p className={styles.text2}>Время в пути составляет от 1 часа.</p>
          </div>
          <div className={styles.rec}>
            <h3 className={styles.heading}>Дополнительные рекомендации</h3>
            <ol className={styles.text}>
              <li>Не забудьте взять с собой бутылку для воды, чтобы<br/> наполнить ее в роднике.</li>
              <li>Помните о сохранности окружающей среды:<br/> 
              не оставляйте мусор после себя и старайтесь<br/> минимизировать своё воздействие на природу.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="block">
        <div className={styles.containerIndicator}>
          <h2>Указатель на родник</h2>
          <div className={styles.imgBox}>
            <img src="./img/indicator.png" alt="indicator" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
