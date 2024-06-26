import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [phone_number, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, question, email, phone_number };
    fetch("http://45.130.9.3:6033/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setEmail("");
    setQuestion("");
    setPhone("");
  };

  return (
    <div className="block-form">
      <div className="container-form">
        <h2 className="heading-form">Обратная связь</h2>
        <p className="text-form">Если у вас есть вопросы - задайте их нам</p>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Как можно к вам обращаться?"
          />
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ваш вопрос"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail, на который мы отправим ответ"
          />
          <input
            type="number"
            value={phone_number}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Номер телефона"
          />
        </form>
        <button form="form" className="btn" type="submit">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Form;
