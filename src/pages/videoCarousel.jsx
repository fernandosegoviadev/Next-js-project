import styles from '../styles/Home.module.css';
import Medias from 'components/videoCarousel/medias';
import Container from '../components/container';
import Head from 'next/head';
import axios from 'axios'

const videoCarousel = (props) => {
    return (
        <div className={styles.mainContainer}>
            <Container>
                <Head>
                    <title>Video Carousel</title>
                </Head>
            </Container>

            <main className={styles.main}>
                <h3 className={styles.title}>
                    Carousel
                </h3>
                <div className={styles.grid}>
                    <Medias videos={props.videos} />
                </div>
            </main>
            
            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
videoCarousel.getInitialProps = async (ctx) => {
    const videos = await axios.get('/api/videos')
        .then((response) => response.data)
        .catch((errors) => errors.data)
    // console.log(videos, 'promise response')
    return { videos: videos.data }
}

export default videoCarousel;