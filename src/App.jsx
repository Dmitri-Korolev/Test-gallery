import { useState } from "react";
import Modal from "./components/Modal/Modal";
// import Gallery from "./components/Gallary/Gallery";
import GalleryData from "./components/Gallary/GalleryData";


function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <h1>Test App</h1>
      <main className="" onClick={()=> setModalActive(true)}>
        {/* <Gallery/> */}
        <GalleryData/>
      </main>
      
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
