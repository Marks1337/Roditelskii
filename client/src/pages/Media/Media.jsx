import { React, useEffect } from 'react';
import Hero from '../../components/Hero/Hero'
import styles from './Media.module.css'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


const Media = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FIRST_IMAGE = {
    imageUrl: './img/beforeImg1.png'
  };
  const SECOND_IMAGE = {
    imageUrl: './img/afterImg1.png'
  };
  const FIRST_IMAGE2 = {
    imageUrl: './img/beforeImg2.png'
  };
  const SECOND_IMAGE2 = {
    imageUrl: './img/afterImg2.png'
  };

 

  return (
    <div>
      <Hero title={'МЕДИА'}/>
      <div className="block">
        <div className={styles.containerPhoto}>
          <h2>Фото</h2>
          <div className={styles.boxImg}>
            <div className={styles.photo1}>
              <img src="./img/MediaPhoto1.png" alt="" /></div>
            <div className={styles.photo2}>
              <img src="./img/MediaPhoto2.png" alt="" /></div>
            <div className={styles.photo3}>
              <img src="./img/MediaPhoto3.png" alt="" />
            </div>
            <div className={styles.photo4}>
              <img src="./img/MediaPhoto4.png" alt="" /></div>
            <div className={styles.photo5}>
              <img src="./img/MediaPhoto5.png" alt="" /></div>
            <div className={styles.photo6}>
              <img src="./img/MediaPhoto6.png" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="block" id={styles.margin}>
        <div className={styles.ContainerVideo}>
          <h2>Видео</h2>
          <div className={styles.boxVideo}>
            <div className={styles.video4}>
              <iframe width="680" height="380" src="https://www.youtube.com/embed/Ng7ZQhhxN64?si=zJFdzUQV3wUParjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen webkitAllowFullScreen mozallowfullscreen></iframe>
            </div>
            <div className={styles.video4}>
            <iframe width="680" height="380" src="https://www.youtube.com/embed/q9hF26Ci434?si=i_I8puJNYDpNi0Hn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className={styles.video4}>
            <iframe width="680" height="380" src="https://www.youtube.com/embed/Y6lsjw2Aewg?si=JMZvLgUbyDH42MYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className={styles.video4}>
            <iframe width="680" height="380" src="https://www.youtube.com/embed/cI8vyVOXzr8?si=MpCB9tTj0zLQBIWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className={styles.containerSlider}>
          <h2>Назад в будущее</h2>
          <div className={styles.boxSlider}>
          <ReactBeforeSliderComponent width={650} secondImage={FIRST_IMAGE} firstImage={SECOND_IMAGE}/>
          <ReactBeforeSliderComponent width={650} secondImage={FIRST_IMAGE2} firstImage={SECOND_IMAGE2}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
