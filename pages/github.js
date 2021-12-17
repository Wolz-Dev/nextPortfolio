import Layout from "../components/Layout"

const GitHub = ({ user }) => {
    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-bnody text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="avatar" />
                        <p>{user.bio}</p>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secundary">Go to my GitHub</a>
                        <a href="/update" className="btn btn-outline-secundary my-2">Updates</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/Wolz-Dev')
    const data = await res.json();

    return {
        props: {
            user: data
        }
    }
}

export default GitHub