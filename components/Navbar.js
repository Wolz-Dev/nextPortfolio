import Link from "next/link"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">Portfolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav ms-auto mb-2">
                    <li className="nav-item">
                        <Link href="/github">
                            <a className="nav-link active">GitHub</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/update">
                            <a className="nav-link">Update</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar