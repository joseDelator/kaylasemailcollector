import type { NextPage } from 'next'
import { useState, Component} from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  const [email, setemail]=useState("");
  const [clientname, setclientname] = useState("");
  
   const emailchange =(e:any)=>{
       setemail(e.target.value.toLocaleLowerCase());
       e.preventDefault();
    
   }
   const clientnamechange =(e:any)=>{
    setclientname(e.target.value.toLocaleLowerCase());
    e.preventDefault();


}
  const  CLICK =async() => {
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        console.log(email)
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ email, clientname})
    };
    fetch('https://lambardies.herokuapp.com/emails', requestOptions)
        .then(res => {
         console.log(res)
      }) 
        setclientname(''),
        setemail('')

   
        
        
    }else{ 
      console.log(email)
    }
      
   }

  return (
    <div className={styles.container}>
      <Head>
        <title>email</title>
        <meta name="description" content="get free sample of  the airplane game" />
        <link rel="icon" href="/dogbook.jpeg" />
      </Head>

          <div className="container">
        
          <img
            src="/dogbook.jpeg"
            alt="image"/>
          <div className="container-text">
            <h2>get free copy of the airplane game</h2>
            <p>just enter your Email and name</p>
            <input type="text" placeholder="Name" value={clientname} onChange={clientnamechange.bind(this)}/>
            <input type="email"  value={email} placeholder="email address" onChange={emailchange.bind(this)}/>
            <button  onClick={CLICK}>Get Access</button>
            <span>No spams included</span>
          </div>
        </div>

    </div>
  )
}

export default Home
