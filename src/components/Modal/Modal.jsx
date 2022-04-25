import React, { useState, useEffect } from 'react';
import './modal.css'

const Modal = ({ active, setActive, children, selectedImg }) => {

    const [bigImgData, setBigImgData] = useState({
        "id":"",
        "url":"https://", 
        "comments": [{ "id": '' }] 
    }); 

    const [data, setData] = useState({
        name: "",
        comment: ""
    })

    function timestampToDate(ts) {
        let d = new Date();
        d.setTime(ts);
        return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
    }


    useEffect(() => {
        let cancelled = false;
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${selectedImg}`)
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(data => !cancelled && setBigImgData(data))
            .catch(error => {
                console.log("error", error);
            });
        return () => cancelled = true;
    }, [selectedImg])

    function submit(e) {
        e.preventDefault()
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${selectedImg}/comments`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                comment: data.comment,
            }),
        })
            .then((response) => {
                console.log('response', response)
                // "JSON" не отправляется при статусе "204 - No Content"
                if (response.status === 204) {
                    return new Promise((resolve) => resolve(null))
                }
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then((json) => {
                // Его значение равно "null", потому что мы сделали "resolve (null)"
                console.log('Тут хочу получить json, но ничего не приходит', json)

            })
            .then(
                // имитация добавления комментария, так как API их не сохраняет
                
                bigImgData.comments.push({"id":155, "text":data.comment, "date":Date.now()})
            )
            .then( setData({
                name: "",
                comment: ""
            }))
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata);
        console.log(newdata);
    }

    return (
        <div className={active ? "modal active" : "modal"} 
            onClick={() => {
                setActive(false);
            }} 
            >
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {children}

                <img src={bigImgData.url} alt=''></img>
                <ul>
                    {
                        bigImgData.comments.map((item) => {
                            return (
                                <li key={item.id}>
                                    <h3>{timestampToDate(item.date)}</h3>
                                    <p>{item.text}</p>
                                </li>
                            );
                        })
                    }
                </ul>
                <form onSubmit={(e) => submit(e)}>
                    <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="Ваше имя" type="text"></input>
                    <input onChange={(e) => handle(e)} id="comment" value={data.comment} placeholder="Ваш комментарий" type="text"></input>
                    <button>Оставить коментарий</button>
                </form>

            </div>
        </div>
    );
};

export default Modal;