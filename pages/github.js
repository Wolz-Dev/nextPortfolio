import Layout from "../components/Layout"
import Error from "./_error"

const GitHub = ({ user, statusCode }) => {

    if (statusCode) {
        return <Error statusCode={statusCode} />
    }

    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4 my-4">
                    <div className="card card-bnody text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="avatar" />
                        <p>{user.bio}</p>
                        <div className="mb-2">
                            <a href={user.html_url} target="_blank" className="btn btn-wolz bg-black2 me-3">Go to my GitHub</a>
                            <a href="/" className="btn btn-wolz bg-black2">Go to my Portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/Wolz-Dev')
    const data = await res.json();

    const statusCode = res.status > 200 ? res.status : false;

    return {
        props: {
            user: data,
            statusCode
        }
    }
}

export default GitHub