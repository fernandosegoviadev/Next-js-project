import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Container from '../components/container'


const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <Container>
        <Head>
          <title>Landing page</title>
        </Head>
      </Container>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Welcome to Next js project!
          </h1>

          <p className={styles.description}>
            Please click the button<code className={styles.code}>Home</code>
            to start
          </p>

        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}


export default Index;