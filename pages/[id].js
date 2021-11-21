import React from 'react'
import { useEffect,useState } from "react";
import { useRouter } from 'next/router'
import s from "../styles/id.module.css"
import db from "../config/firebase";

function Home(data) {
    const [userinfo, setuserinfo] = useState(null)
    const router = useRouter()

    const [select, setselect] = useState(false);
    useEffect(() => {
        let id = router.query.id;
        const user = data?.data.filter((contact)=>{
            return (contact.id.toLowerCase().indexOf(id) !== -1)
        });
        setuserinfo(user);
    }, [])

    const select_user = (e) => {
        e.preventDefault()
        db.collection("select").add(
            {
                id : userinfo?.[0].id,
                name : userinfo?.[0].name,
                Image : userinfo?.[0].Image
            }
        );
        setselect(!select);
        router.push("/");
    }

    const reject_user = (e) => {
        e.preventDefault()
        db.collection("reject").add(
            {
                id : userinfo?.[0].id,
                name : userinfo?.[0].name,
                Image : userinfo?.[0].Image
            }
        );
        setselect(!select);
        router.push("/");
    }

    return (
        <div className={s.Container1}>
            {
                !select ? (<div className={s.Container}>
                    <h1><span className={s.span}>U</span>ser Informatio<span className={s.span}>n</span></h1>
                    <img src={userinfo?.[0]?.Image} alt={`${userinfo?.[0]?.Image}`} />
                    <p>UserID :- {userinfo?.[0]?.id}</p>
                    <p>UserName :- {userinfo?.[0]?.name}</p> 
                    <div className={s.wrap}>
                            <button onClick={select_user}>Select</button>
                    </div>
                        <div className={s.wrap1} >
                            <button onClick={reject_user}>Reject</button>
                        </div>
                    </div>)  : 
                    (
                        <div>
                            <h1><span className={s.span}>Y</span>ou already selected the use<span className={s.span}>r</span></h1>
                        </div>
                    )
            }
           
        </div>
    )
}

export default Home

export async function getServerSideProps(){
    const result = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").catch(error => console.error(error));
    const data = await result.json();
    return {
      props:{
        data : data
      }
    }
}
