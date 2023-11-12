import Footer from "./Footer";
import Header from "./Header";
import HeaderLinks from "/components/HeaderLinks.js";

const Layout = ({ children }) => {
  return (
    <>
      <Header
        color="info"
        brand="Econnect"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
      <main style={{paddingTop: "70px"}}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;