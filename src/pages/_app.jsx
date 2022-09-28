import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/globals.scss';

import axios from 'axios'

// import "./styles.css";

// axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3000/';
axios.defaults.baseURL = process.env.AXIOS_URL

// console.log(process.env.AXIOS_URL, ' la variable de entorno')

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
