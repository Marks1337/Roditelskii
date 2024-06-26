import React from "react";
import Form from "../../components/Form/Form";
import Hero from "../../components/Hero/Hero";
import styles from "./Support.module.css";
import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <div>
      <Hero
        title={"ПОДДЕРЖАТЬ"}
        externalLink={"https://www.donationalerts.com/r/rodrodnik"}
      />
      <div className="block">
        <div className={styles.containerText}>
          <div className={styles.support}>
            <h3>Поддержать родник</h3>
            <p className={styles.text}>
              Добро пожаловать на страницу поддержки нашего
              <br /> проекта по благоустройству родника. Ваш вклад
              <br /> помогает нам сохранять и улучшать этот
              <br /> уникальный природный ресурс для будущих
              <br /> поколений. Своими силами мы работаем над тем,
              <br /> чтобы обеспечить долгосрочное сохранение этого
              <br /> родника, чтобы он оставался чистым и доступным
              <br /> для всех. Вместе мы можем сделать больше!
            </p>
          </div>
          <div className={styles.mission}>
            <h3>Наша миссия</h3>
            <p className={styles.text}>
              Наша миссия - это благоустройство
              <br /> родника. Мы стремимся создать
              <br /> комфортные и безопасные условия для
              <br /> всех, кто посещает этот уникальный
              <br /> природный объект.
            </p>
          </div>
        </div>
      </div>
      <div className="block" id={styles.margin}>
        <div className={styles.containerTasks}>
          <h2>Задачи</h2>
          <span className={styles.textSpan}>
            Ваши пожертвования и поддержка направляются
            <br /> на ряд важных работ, включая:
          </span>
          <div className={styles.boxTasks}>
            <div className={styles.firstBox}>
              <h4 className={styles.headingTasks}>
                Улучшение подхода к роднику.
              </h4>
              <img src="./img/1tasks.png" alt="Улучшение подхода" />
            </div>
            <div className={styles.secondBox}>
              <h4 className={styles.headingTasks}>Преображение купели.</h4>
              <img src="./img/2tasks.png" alt="Улучшение подхода" />
            </div>
            <div className={styles.thirdBox}>
              <h4 className={styles.headingTasks}>Строительство мостов.</h4>
              <img src="./img/3tasks.png" alt="Улучшение подхода" />
            </div>
            <div className={styles.fourthBox}>
              <h4 className={styles.headingTasks}>Установка креста.</h4>
              <img src="./img/4tasks.png" alt="Улучшение подхода" />
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className={styles.containerText}>
          <div className={styles.support}>
            <h3>Как вы можете помочь</h3>
            <p className={styles.text}>
              Есть несколько способов поддержать наш проект:
              <br /> 1. Финансовые пожертвования.
              <br /> 2. Волонтерство: Если вы хотите принять участие в<br />
              нашем проекте в качестве волонтера или
              <br /> предложить другие виды помощи, пожалуйста,
              <br /> свяжитесь с нами через форму обратной связи
              <br /> на этой странице. Мы будем рады вашей
              <br /> инициативе! <br />
              3. Распространение информации про родник.
            </p>
          </div>
          <div className={styles.mission}>
            <h3>Благодарность</h3>
            <p className={styles.text}>
              Мы хотим выразить огромную благодарность всем,
              <br /> кто поддерживает наш проект. Ваша поддержка
              <br /> имеет огромное значение для нас и помогает
              <br /> делать родник лучше.
            </p>
          </div>
        </div>
      </div>
      <div className="block">
        <div className={styles.containerBtn}>
          <Link to={"https://www.donationalerts.com/r/rodrodnik"} target="_blank" className={styles.btn}>Поддержать проект</Link>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Support;
