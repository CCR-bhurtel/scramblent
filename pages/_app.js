import ContentWraper from '../Components/Layouts/ContentWraper';
import Footer from '../Components/Layouts/Footer';
import Navbar from '../Components/Layouts/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-Keppel min-h-screen">
            <Navbar />
            <ContentWraper>
                <Component {...pageProps} />
            </ContentWraper>
            <Footer />
        </div>
    );
}

export default MyApp;
