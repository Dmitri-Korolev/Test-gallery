import { useState } from "react";
import Modal from "./Modal/Modal";


function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <h1>Test App</h1>
      <div className="" onClick={()=> setModalActive(true)}>
        Gallery
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
