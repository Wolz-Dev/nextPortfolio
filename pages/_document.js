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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument