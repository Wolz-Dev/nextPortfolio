import Layout from "../components/Layout";

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
                            <h3>Junior Developer</h3>
                            <p>Invidunt rebum et stet sit et lorem takimata, consetetur ipsum erat et vero et dolor clita et. Sadipscing accusam est justo ipsum ipsum magna. Accusam no sed sit sed stet.</p>
                            <a href="/hireme">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Second section */}

    </Layout>
)

export default Index;