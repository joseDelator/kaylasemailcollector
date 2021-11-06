import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'


const success: NextPage = () => {

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
            <h1>success!!!</h1>
            
             </div>

    </div>
  )
}

export default success
