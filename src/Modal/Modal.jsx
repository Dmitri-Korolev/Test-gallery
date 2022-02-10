import React from 'react';
import './modal.css'

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                111
            </div>
        </div>
    );
};

export default Modal;