import '../styles/globals.css'
import axios from 'axios'

// axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3000/';
axios.defaults.baseURL = process.env.AXIOS_URL

// console.log(process.env.AXIOS_URL, ' la variable de entorno')

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
