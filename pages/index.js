import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  
  return (
    <div className={styles.container}>
        <h1>Fintech-dev</h1>
        <h2>{process.env.NEXT_PUBLIC_FINTECHNAME}</h2>
    </div>
  )
}
