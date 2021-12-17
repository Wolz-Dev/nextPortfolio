import Layout from "../components/Layout";
import { skills, educations, projects } from "../profile"
import Link from "next/link"

console.log(skills, educations, projects);

const Index = () => (
    <Layout>
        {/* Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="photoport.jpeg" alt="foto perfil" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Walter Celiz</h1>
                            <h3>Junior Front-End Developer</h3>
                            <p>Self-taught Web Developer looking for my first experience in the world of technology.</p>
                            <a href="/contactme">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Second section */}
        <div className="row py-3">
            <div className="col-md-4">
                <div className="card bg-light">
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
            <div className="col-md-8">
                <div className="card bg-light">
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
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>

                        {
                            projects.map(({ name, description, image, preview, code }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="-" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <div className="d-flex justify-content-center">
                                                <Link href={preview}>
                                                    <a className="btn btn-primary me-1">Preview</a>
                                                </Link>
                                                <Link href={code}>
                                                    <a className="btn btn-primary">Code</a>
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