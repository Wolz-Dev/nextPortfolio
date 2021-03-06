import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Portfolio Celiz Walter</title>
                    <meta name="description" content="Walter Celiz Portfolio" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.1.5/nprogress.css" integrity="sha512-j9L5f7y6XeT13BypDgKfVgynVVoS9yLmr/jUGrcfy5IIFIwWT0VK9czh7qoMHbah+Et1kCdpM57BOr9ihIKRMQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
                </Head>
                <body className="test">
                    <Main />
                    <NextScript />
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
                    <script src="https://kit.fontawesome.com/9fe8926072.js" crossorigin="anonymous"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument