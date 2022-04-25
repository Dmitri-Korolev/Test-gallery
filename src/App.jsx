import { useState } from "react";
import Modal from "./components/Modal/Modal";
import GalleryData from "./components/Gallary/GalleryData";

import './App.css'


function App() {
  const [modalActive, setModalActive] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  
  return (
    <div className="App">
      <h1>Test App</h1>
      <main className="">
        <GalleryData setSelectedImg={setSelectedImg} active={modalActive} setActive={setModalActive}/>
      </main>
      
      <Modal selectedImg = {selectedImg} active={modalActive} setActive={setModalActive} setSelectedImg={setSelectedImg}/>
    </div>
  );
}

export default App;
