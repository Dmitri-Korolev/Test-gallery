import React, {useState, useEffect} from 'react';

const GalleryData = () => {
    const [imgData, setImgData] = useState([])

    useEffect(()=> {

        fetch("https://boiling-refuge-66454.herokuapp.com/images")
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(data => 
            {
                setImgData(data)
            }
        )
        .catch(error => {
         console.log("error", error);
        });
    }, [])


    return (
        
            <ul>
                {
                    imgData.map((item) => {
                        return (
                          <li key={item.id}>
                            <img src={item.url} alt="" />
                          </li>
                        );
                      })
                }
            </ul>
        
    );
};

export default GalleryData;

