import styles from '../styles/Home.module.css'
import Container from '../components/container'
import Head from 'next/head'
import Link from 'next/link'

const Credits = () => {
    return (
        <div className={styles.mainContainer}>
            <Container>
                <Head>
                    <title>Credits</title>
                </Head>           
            </Container>

            <main className={styles.main}>
                <h3 className={styles.title}>
                    Credits
                </h3>

                <div className={styles.grid}>
                    Created by Fernando           
                                   
                    <Link href="https://www.linkedin.com/in/fernando-segovia-dev/">
                        <a className="nav-link" target="_blank">LinkedIn profile</a>
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
export default Credits;