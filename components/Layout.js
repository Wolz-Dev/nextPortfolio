import Navbar from "./Navbar"
import { useEffect } from "react"
import { useRouter } from "next/router"
import NProgress from "nprogress"

const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => NProgress.done())

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }

    }, [])


    return (
        <>
            <Navbar />
            <main className="container mt-6 glass">
                {children}
            </main>
        </>
    )
}

export default Layout