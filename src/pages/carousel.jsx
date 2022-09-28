import styles from '../styles/Home.module.css';
import Photos from 'components/photos';
import Container from '../components/container';
import Head from 'next/head';

const Carousel = () => {
    // console.log(props, 'cuando llegan los user por props')
    return (
        <div className={styles.mainContainer}>
            <Container>
                <Head>
                    <title>Carousel</title>
                </Head>           
            </Container>
            
            <main className={styles.main}>
                <h3 className={styles.title}>
                    Carousel
                </h3>
                <div className={styles.grid}>
                    <Photos />
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}


export default Carousel;