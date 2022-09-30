import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import Footer from '../components/Template/Footer';


// import SideBar from '../components/Template/SideBar';
// import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <div>
    <Helmet titleTemplate="%s | Texture" defaultTitle="Texture" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation lang={props.lang}/>
      <main id="main">
        
        {props.children}
      </main>
      <Footer lang={props.lang}></Footer>
    </div>
  </div>
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