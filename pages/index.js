import Layout from "../components/Layout";
import { skills, educations, projects } from "../profile"
import Link from "next/link"

const Index = () => (
    <Layout>
        {/* Header card */}
        <header className="row mt-4">
            <div className="col-md-12">
                <div className="card card-body bg-black3 glass text-light py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="photoport.jpeg" alt="foto perfil" className="img-fluid glass" />
                        </div>
                        <div className="col-md-8">
                            <h1 className="maker color1 mt-3 fs-2">Walter Celiz</h1>
                            <h3 className="maker2">Junior Front-End Developer</h3>
                            <p className="fs-5">Self-taught Web Developer looking for my first experience in the world of technology.</p>
                            <br />
                            <h3 className="maker2">Contact me</h3>
                            <div className="fs-5 d-flex align-items-center">
                                <a href="mailto:wolz.dev@gmail.com" className="text-decoration-none text-light d-flex align-items-center zoom2"><i className="far fa-envelope fs-3"></i>&nbsp;Email</a>&nbsp;&nbsp;&nbsp;
                                <a href="https://wa.me/+5493816315733" target="_blank" className="text-decoration-none text-light d-flex align-items-center zoom2"><i className="fab fa-whatsapp fs-3"></i>&nbsp;Whatsapp</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Second section */}
        <div className="row mt-1">
            <div className="col-md-4 mt-3">
                <div className="card bg-black3 glass text-light">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >

                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="col-md-8 mt-3">
                <div className="card bg-light glass">
                    <div className="card-body">
                        <h1>Education</h1>
                        <ul>
                            {
                                educations.map(({ title, description }, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Portfolio */}
        <div className="row mt-5 mb-3">
            <div className="col-md-12">
                <div className="card card-body bg-black3 glass">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center color1">Portfolio</h1>
                        </div>

                        {
                            projects.map(({ name, description, image, preview, code }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100 glass">
                                        <div className="overflow h-100">
                                            <img src={`/${image}`} alt="-" className="h-100 card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <div className="d-flex justify-content-center">
                                                <Link href={preview}>
                                                    <a className="btn btn-wolz me-1 bg-dark text-light border-wolz">Preview</a>
                                                </Link>
                                                <Link href={code}>
                                                    <a className="btn btn-wolz bg-dark text-light border-wolz">Code</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index;