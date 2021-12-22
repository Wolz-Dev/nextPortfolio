import Link from "next/link"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg bg-black2 navbar-dark fixed-top navround">
        <div className="container d-flex">
            <Link href="/">
                <a className="navbar-brand color1 fs-5 fw-bold border border-primary px-2 py-2">Portfolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <Link href="/github">
                    <a className="nav-link active fs-5 color1 fw-bold ms-auto d-inline-block border border-primary mt-2">GitHub</a>
                </Link>
            </div>
        </div>
    </nav>
)

export default Navbar