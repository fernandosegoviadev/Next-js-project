import styles from '../styles/Home.module.css'
import Container from '../components/container'
import Head from 'next/head'
import Link from 'next/link'

const Credits = () => {
    return (
        <div className={styles.container}>
            <Container>
                <Head>
                    <title>Credits</title>
                </Head>
                <h2>Credits</h2>
            </Container>


            <main className={styles.main}>
                <h3 className={styles.title}>
                    Created by Fernando
                </h3>
                <Link href="https://www.linkedin.com/in/fernando-segovia-dev/">
                    <a className="nav-link" target="_blank">LinkedIn profile</a>
                </Link>


            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
export default Credits;