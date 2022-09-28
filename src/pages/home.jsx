import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Container from '../components/container'
import axios from 'axios'
import Videos from '../components/videos'

const Home = (props) => {
    // console.log(props, 'cuando llegan los user por props')
    return (
        <div className={styles.mainContainer}>
            <Container>
                <Head>
                    <title>Home</title>
                </Head>
            </Container>

            <main className={styles.main}>
                {/* <h3 className={styles.title}>
                    It's Home
                </h3> */}

                <div className={styles.grid}>
                    <Videos videos={props.videos} />
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
Home.getInitialProps = async (ctx) => {
    const videos = await axios.get('/api/videos')
        .then((response) => response.data)
        .catch((errors) => errors.data)
    return { videos: videos.data }
}

export default Home;