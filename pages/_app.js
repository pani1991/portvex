// Import the Bootstrap CSS file for styling the application.
import "bootstrap/dist/css/bootstrap.min.css";
// Import a local CSS file named "globals.css" that may contain additional styles for the application.
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}   />;
}

export default MyApp;
