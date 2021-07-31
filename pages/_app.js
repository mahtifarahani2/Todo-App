import Head from 'next/head';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
                    media="print"
                    onLoad="this.media='all'"
                />
                <link
                    rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Merienda%20One&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Merienda%20One&display=swap"
                    media="print"
                    onLoad="this.media='all'"
                />
                <noscript>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Merienda%20One&display=swap"
                    />
                </noscript>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
