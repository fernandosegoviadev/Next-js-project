import styles from '../styles/Home.module.css'
import Container from '../components/container'
import Head from 'next/head'

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
                <h1 className={styles.title}>
                    It's Credits
                </h1>

                {/* <div className={styles.grid}>
                </div> */}
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
export default Credits;