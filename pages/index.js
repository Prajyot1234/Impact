import { useEffect,useState  } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home(data) {

  console.log(useDataLayerValue);
  // const [ dispatch ] = useDataLayerValue();
  const [ user, setuser ] = useState(undefined);
  
  useEffect(() => {
    setuser(data)
  }, []);

  const ShowUserData = (data) => {
    return(
      <Link href={`/${data.id}`}>
        <div className={styles.SliderContainer}>
          <img src={data.Image}/>
          <h1>{data.name}</h1>
          <div className={styles.wrap}>
            <button>Check Profile</button>
          </div>  
        </div>
      </Link>
    )
  }

  const [searchoption, setsearchoption] = useState(null);
  const update = (e)=> {
      setsearchoption(e.target.value);
  }

    //this is for filtering the contact data, when we use the search filter.
    let filteredContact = data?.data.filter((contact)=>{
      return (contact.name.toLowerCase().indexOf(searchoption) !== -1)
    }) ;

  return (
    <div className={styles.container}>
      <Head>
        <title>Job Portal</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.MainContainer}>
        <Link href='/'>
          <h1 className={styles.title}><span className={styles.span}>J</span>ob Porta<span className={styles.span}>l</span></h1>
        </Link>
        <Link href='/shortlisted'>
          <div className={styles.wrap}>
              <button>Selected</button>
          </div>
        </Link>
        <Link href='/Rejected'>
          <div className={styles.wrap1}>
            <button>Rejected</button>
          </div>
        </Link>
      
        <input onChange={update} className={styles.input} placeholder="Search Candidate Name" spellCheck="false"/>
         <div className={styles.SContainer}>
         {   
              searchoption === null ? 
              (data?.data.map(ShowUserData)) 
              :
              (filteredContact?.map(ShowUserData))
         }
            
        </div>
        <div className={styles.bottom}> 
          <h1>
          <span className={styles.span}>C</span>reated and designed by Prajyot Burbur<span className={styles.span}>e</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(){
    const result = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").catch(error => console.error(error));
    const data = await result.json();
    return {
      props:{
        data : data
      }
    }
}
