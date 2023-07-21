import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import Footer from '../components/Template/Footer';


// import SideBar from '../components/Template/SideBar';
// import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <>
    <Helmet titleTemplate="%s | Texture" defaultTitle="Texture" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div className="d-flex flex-column" id="wrapper" style={{ minHeight: "100vh" }}>
      <div>
        <Navigation lang={props.lang} />
      </div>
      <div>
        <main id="main">
          {props.children}
        </main>
      </div>
      <div className='mt-auto'>
        <Footer lang={props.lang}></Footer>
      </div>
    </div>
  </>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Texture website.",
};

export default Main;