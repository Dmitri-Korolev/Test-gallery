import React from 'react';
import './modal.css'

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {children}
                <form>
                    <img alt=''></img>
                    <input></input>
                    <input></input>
                    <button>Оставить коментарий</button>
                </form>
                <div>
                    comments
                </div>
            </div>
        </div>
    );
};

export default Modal;