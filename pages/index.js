import Layout from "../components/Layout";
import { skills, educations } from "../profile"

console.log(skills, educations);

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

    </Layout>
)

export default Index;