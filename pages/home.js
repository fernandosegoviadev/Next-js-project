import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Container from '../components/container'
import axios from 'axios'
import Users from '../components/users'

const Home = (props) => {
    // console.log(props, 'cuando llegan los user por props')
    return (
        <div className={styles.container}>
            <Container>
                <Head>
                    <title>Home</title>
                </Head>
                <h2>Home</h2>
            </Container>


            <main className={styles.main}>
                <h1 className={styles.title}>
                    It's Home
                </h1>

                <div className={styles.grid}>
                    <Users users={props.users}/>
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
Home.getInitialProps = async (ctx) => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
        .catch((errors) => console.log(errors))
    // console.log(users, 'cuando llega la respuesta')
    return { users }
}

export default Home;