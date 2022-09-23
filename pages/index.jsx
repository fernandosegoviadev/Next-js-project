import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Container from '../components/container'

const Index = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Head>
          <title>Landing page</title>
        </Head>

        <h2>Landing page</h2>
        <p>It is the landing page.</p>
      </Container>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next js project!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <h2>Deploy is running</h2>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}


export default Index;