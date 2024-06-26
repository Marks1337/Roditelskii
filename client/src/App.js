import {React, useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import MainPage from "./pages/MainPage/MainPage"
import News from "./pages/News/News"
import Media from "./pages/Media/Media"
import Map from "./pages/Map/Map"
import Contacts from "./pages/Contacts/Contacts"
import Support from "./pages/Support/Support"
import "./styles/App.css"
import Modal from "./components/Modal/Modal"
import ModalNews from "./components/ModalNews/ModalNews"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  const [modalActive, setModalActive] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const [modalActive2, setModalActive2] = useState(false)
  const [modalContent2, setModalContent2] = useState(null)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage modalActive={modalActive} setModalActive={setModalActive} setModalContent={setModalContent} modalActive2={modalActive2} setModalActive2={setModalActive2} setModalContent2={setModalContent2}/>}/>
        <Route path="/news" element={<News modalActive2={modalActive2} setModalActive2={setModalActive2} setModalContent2={setModalContent2}/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
      <Footer/>
      <Modal active={modalActive} setActive={setModalActive} content={modalContent}/>
      <ModalNews active={modalActive2} setActive={setModalActive2} content={modalContent2}/>
    </BrowserRouter>
  );
}

export default App;
