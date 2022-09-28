import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid"> 
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page">Landing page</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/home">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/carousel">
                                <a className="nav-link">Carousel</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/videoCarousel">
                                <a className="nav-link">Video Carousel</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/credits">
                                <a className="nav-link">Credits</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navigation;