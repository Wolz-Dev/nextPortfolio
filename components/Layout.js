import Navbar from "./Navbar"
import { useEffect } from "react"
import { useRouter } from "next/router"
import NProgress from "nprogress"

const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url)
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
            <main className="container py-4">
                {children}
            </main>
        </>
    )
}

export default Layout