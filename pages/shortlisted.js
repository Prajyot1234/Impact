import React from 'react'
import { useEffect,useState } from 'react'
import s from "../styles/shortlisted.module.css"
import db from "../config/firebase"

function sortlisted() {

    const [ data, setdata ] = useState([]);
    useEffect(() => {
        db.collection("select").onSnapshot(snapshot =>setdata((snapshot.docs.map(doc => doc.data()))))
        //setdata(console.log(db.collection("select").onSnapshot(snapshot =>(snapshot.docs.map(doc => doc.data())))))
        console.log(data);
    }, [])

    const ShowUserData = (data) => {
        return(
            <div className={s.SliderContainer}>
              <img src={data.Image}/>
              <h1>{data.name}</h1>
              <div className={s.wrap}>
                <button>Check Profile</button>
              </div>  
            </div>
        )
      }

    return (
        <div className={s.Container}>
            <h1>Selected</h1>
            <div className={s.SContainer}>
            {   
                data?.map(ShowUserData)
            }
            </div>
        </div>
    )
}

export default sortlisted
