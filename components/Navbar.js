import Link from "next/link"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navround">
        <div className="container d-flex">
            <Link href="/">
                <a className="navbar-brand color1 align-self-center fs-5 fw-bold">Portfolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <Link href="/github">
                    <a className="nav-link active fs-5 color1 fw-bold ms-auto">GitHub</a>
                </Link>
            </div>
        </div>
    </nav>
)

export default Navbar