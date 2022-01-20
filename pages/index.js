import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "98.css";
import React from "react"
import Link from 'next/link';

export default function Home() {

  return (

    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className='window' >
          <div className={styles.main } >
            <Image
              src='/assets/demo.gif'
              Quality={100}
              layout='intrinsic'
              width={300}
              height={300}
            />
            <h2 className={"animate-flicker"}>
              Play Now
            </h2>
            <button>
              Enter
            </button>
          </div>
        </div>


      </div>

      {/* <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <footer className='title-bar' >
          <Link href="/test"><button className='button'>Test Page</button></Link>
        </footer>
      </div> */}

    </div>

  )
}
