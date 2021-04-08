import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ejemplos en <a href="https://nextjs.org">Matlab</a>
        </h1>

        <div className={styles.grid}>
        <h3>Ejemplo 1 &rarr;</h3>
        </div>
        <div className={styles.grid}>
        <h3>Ejemplo 2 &rarr;</h3>
        </div>
        <div className={styles.grid}>
        <h3>Ejemplo 3 &rarr;</h3>
        </div>
        <div className={styles.grid}>
        <h3>Ejemplo 4 &rarr;</h3>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
