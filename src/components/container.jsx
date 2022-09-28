import Navigation from "./navigation";
import Head from 'next/head'

const Container = (props) => {
    return (
        <div className="headContainer">
            <Head>
                <title>
                    Next js project
                </title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css" />
            </Head>
            <Navigation />
            <div className="">
                {props.children}
            </div>
        </div>
    )
}
export default Container;