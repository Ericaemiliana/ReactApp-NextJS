import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import SmoothieList from '../components/SmoothieList'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
     
      <Head>
        <title>Fresh Start App</title>
        <meta name="description" content="My Healthy Jucy Morning " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <SmoothieList/>
     

      
      
    </div>
  )
}
